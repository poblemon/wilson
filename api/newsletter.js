const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();

// Configuración de CORS para tus dominios específicos
const allowedOrigins = [
  'https://wilson-6vrg-poblemons-projects.vercel.app',
  'https://wilson-6vrg-git-main-poblemons-projects.vercel.app',
  'https://wilson-6vrg-f16wo0hij-poblemons-projects.vercel.app',
  'http://localhost:3000'
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

app.use(express.json());

// Directorio temporal en Vercel
const dbPath = path.join('/tmp', 'newsletter.db');

// Inicialización mejorada de la base de datos
let db;
const initDb = () => {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
      if (err) return reject(err);
      
      db.run(`CREATE TABLE IF NOT EXISTS subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT NOT NULL, 
        email TEXT NOT NULL UNIQUE, 
        interests TEXT, 
        subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`, (err) => {
        if (err) reject(err);
        else {
          console.log('Database initialized');
          resolve();
        }
      });
    });
  });
};

// Endpoint mejorado para newsletter
app.post('/api/newsletter', async (req, res) => {
  try {
    if (!db) await initDb();
    
    const { name, email, interests = [] } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Name and email are required.',
        details: { received: req.body }
      });
    }
    
    const interestsStr = Array.isArray(interests) ? interests.join(',') : interests;
    
    db.run(
      "INSERT INTO subscribers (name, email, interests) VALUES (?, ?, ?)",
      [name, email, interestsStr],
      function(err) {
        if (err) {
          console.error('Database error:', err);
          if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(409).json({ 
              error: 'Email already subscribed.',
              suggestion: 'Use a different email or request support'
            });
          }
          return res.status(500).json({ 
            error: 'Database operation failed',
            details: err.message
          });
        }
        
        res.status(201).json({ 
          message: 'Subscription successful.', 
          id: this.lastID,
          timestamp: new Date().toISOString()
        });
      }
    );
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      requestId: req.id
    });
  }
});

// Health check mejorado
app.get('/api/newsletter', async (req, res) => {
  try {
    if (!db) await initDb();
    
    db.get("SELECT COUNT(*) as count FROM subscribers", (err, row) => {
      if (err) {
        console.error('Health check failed:', err);
        return res.status(500).json({ 
          status: 'Database error',
          error: err.message
        });
      }
      
      res.json({ 
        status: 'API is working',
        subscribers: row.count,
        timestamp: new Date().toISOString(),
        dbPath: dbPath
      });
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Initialization failed',
      error: error.message
    });
  }
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    error: 'Unexpected error occurred',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Exportar para Vercel
module.exports = app;