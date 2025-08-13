const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Para Vercel, usaremos /tmp que es el directorio temporal permitido
const dbPath = path.join('/tmp', 'newsletter.db');

// Inicializar base de datos
let db;
const initDb = () => {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
        reject(err);
      } else {
        console.log('Connected to SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS subscribers (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          name TEXT NOT NULL, 
          email TEXT NOT NULL UNIQUE, 
          interests TEXT, 
          subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
          if (err) reject(err);
          else resolve();
        });
      }
    });
  });
};

// Endpoint para newsletter
app.post('/api/newsletter', async (req, res) => {
  try {
    if (!db) await initDb();
    
    const { name, email, interests } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }
    
    const interestsStr = Array.isArray(interests) ? interests.join(',') : '';
    
    const query = "INSERT INTO subscribers (name, email, interests) VALUES (?, ?, ?)";
    
    db.run(query, [name, email, interestsStr], function(err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(409).json({ error: 'Email already subscribed.' });
        }
        return res.status(500).json({ error: 'Database error.' });
      }
      res.status(201).json({ message: 'Subscription successful.', id: this.lastID });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error.' });
  }
});

// Health check
app.get('/api/newsletter', (req, res) => {
  res.json({ status: 'API is working' });
});

// Exportar para Vercel
module.exports = app;
