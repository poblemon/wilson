require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// CORS configurado para Vercel frontend + desarrollo local
const allowedOrigins = [
  'https://wilson-6vrg-poblemons-projects.vercel.app',
  'https://wilson-6vrg-git-main-poblemons-projects.vercel.app',
  'https://wilson-6vrg-f16wo0hij-poblemons-projects.vercel.app',
  'http://localhost:3000',
  'http://localhost:5173' // Vite dev
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requests sin origin (como Postman o apps móviles)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('Blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(bodyParser.json());

// Conexión a PostgreSQL (Render PostgreSQL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? {
    rejectUnauthorized: false
  } : false
});

// Verificar conexión a la base de datos
pool.on('connect', () => {
  console.log('✅ Conectado a PostgreSQL');
});

pool.on('error', (err) => {
  console.error('❌ Error en PostgreSQL:', err);
});

// Crear tabla al iniciar
(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        interests TEXT[],
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Tabla subscribers lista');
  } catch (err) {
    console.error('❌ Error al crear tabla:', err);
  }
})();

// ============================================
// ENDPOINTS
// ============================================

// Health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'WealthWise API está funcionando',
    timestamp: new Date().toISOString(),
    endpoints: {
      newsletter: 'POST /api/newsletter',
      chat: 'POST /api/chat',
      test: 'GET /api/test'
    }
  });
});

// Test de base de datos
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as time, version() as version');
    const countResult = await pool.query('SELECT COUNT(*) as total FROM subscribers');
    
    res.json({ 
      status: 'OK',
      message: 'API y base de datos funcionando correctamente',
      database: {
        time: result.rows[0].time,
        version: result.rows[0].version,
        subscribers: countResult.rows[0].total
      },
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (err) {
    console.error('Error en test:', err);
    res.status(500).json({ 
      status: 'ERROR',
      error: 'No se pudo conectar a la base de datos',
      details: err.message 
    });
  }
});

// Newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  const { name, email, interests } = req.body;

  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Name and email are required.',
      received: { name: !!name, email: !!email }
    });
  }

  // Validación básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO subscribers (name, email, interests) 
       VALUES ($1, $2, $3) 
       RETURNING id, subscribed_at`,
      [name, email, interests || []]
    );

    console.log('✅ Nuevo suscriptor:', email);

    res.status(201).json({ 
      success: true,
      message: 'Subscription successful.', 
      data: {
        id: result.rows[0].id,
        subscribedAt: result.rows[0].subscribed_at
      }
    });
  } catch (err) {
    console.error('Error en newsletter:', err);
    
    if (err.code === '23505') { // UNIQUE constraint violation
      return res.status(409).json({ 
        error: 'Email already subscribed.',
        suggestion: 'This email is already in our system.'
      });
    }
    
    res.status(500).json({ 
      error: 'Internal server error.',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// Chat con IA (OpenRouter)
app.post('/api/chat', async (req, res) => {
  const { messages, userMessage } = req.body;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Verificar API key
  const apiKey = process.env.OPENROUTER_API_KEY;
  
  if (!apiKey) {
    console.error('❌ OPENROUTER_API_KEY no configurada');
    return res.status(500).json({ 
      error: 'Servicio de chat no configurado correctamente',
      hint: 'Contacta al administrador del sistema'
    });
  }

  try {
    console.log('🤖 Enviando mensaje a OpenRouter...');
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': process.env.APP_URL || 'https://wilson-6vrg-poblemons-projects.vercel.app',
        'X-Title': 'WealthWise Financial Education'
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3-haiku',
        temperature: 0.3,
        max_tokens: 500,
        messages: [
          {
            role: 'system',
            content: `Eres Wilson, un asistente financiero experto que responde siempre en español de manera clara, profesional y amable. 

Tus especialidades incluyen:
- Educación financiera básica
- Explicaciones sobre inversiones (acciones, bonos, fondos, ETFs)
- Conceptos de ahorro y presupuesto
- Información sobre criptomonedas
- Análisis básico de mercados

IMPORTANTE:
- Siempre responde en español
- Sé claro y evita jerga innecesaria
- Si no sabes algo, di "No tengo esa información actualizada"
- No des consejos de inversión específicos, solo información educativa
- Sé amigable pero profesional`
          },
          ...messages.slice(-6),
          { role: 'user', content: userMessage }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Error de OpenRouter:', response.status, errorText);
      
      if (response.status === 401) {
        return res.status(500).json({ 
          error: 'Error de autenticación con el servicio de IA',
          hint: 'Verifica que la API key sea válida'
        });
      }
      
      throw new Error(`OpenRouter error: ${response.status}`);
    }

    const data = await response.json();
    const botResponse = data.choices?.[0]?.message?.content || 
      "No pude procesar tu pregunta. ¿Podrías reformularla?";

    console.log('✅ Respuesta de IA recibida');

    res.json({ 
      success: true,
      response: botResponse 
    });

  } catch (error) {
    console.error('❌ Error en chat:', error);
    res.status(500).json({ 
      error: 'Error al procesar el mensaje',
      details: error.message
    });
  }
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error global:', err);
  res.status(500).json({
    error: 'Something broke!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log('=================================');
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📍 Entorno: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔑 API Key configurada: ${!!process.env.OPENROUTER_API_KEY}`);
  console.log(`💾 Database URL configurada: ${!!process.env.DATABASE_URL}`);
  console.log('=================================');
});
