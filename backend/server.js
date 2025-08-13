require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// Configuración de CORS para tus dominios Vercel
const allowedOrigins = [
  'https://wilson-6vrg-poblemons-projects.vercel.app',
  'https://wilson-6vrg-git-main-poblemons-projects.vercel.app',
  'https://wilson-6vrg-f16wo0hij-poblemons-projects.vercel.app',
  'http://localhost:3000' // Para desarrollo local
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(bodyParser.json());

// Conexión a PostgreSQL (Vercel Postgres)
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Crear tabla si no existe
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
    console.log('Tabla creada o ya existente');
  } catch (err) {
    console.error('Error al crear tabla:', err);
  }
})();

// Endpoint para newsletter
app.post('/api/newsletter', async (req, res) => {
  const { name, email, interests } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO subscribers (name, email, interests) 
       VALUES ($1, $2, $3) 
       RETURNING id`,
      [name, email, interests || []]
    );

    res.status(201).json({ 
      message: 'Subscription successful.', 
      id: result.rows[0].id 
    });
  } catch (err) {
    if (err.code === '23505') { // Violación de UNIQUE
      return res.status(409).json({ error: 'Email already subscribed.' });
    }
    console.error('Database error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Endpoint de prueba
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as time');
    res.json({ 
      message: 'API is working!',
      databaseTime: result.rows[0].time,
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});