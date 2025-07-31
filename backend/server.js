const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database(path.resolve(__dirname, 'newsletter.db'), (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      interests TEXT,
      subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// API endpoint to receive newsletter subscription
app.post('/api/newsletter', (req, res) => {
  const { name, email, interests } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  const interestsStr = Array.isArray(interests) ? interests.join(',') : '';

  const query = `INSERT INTO subscribers (name, email, interests) VALUES (?, ?, ?)`;
  db.run(query, [name, email, interestsStr], function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(409).json({ error: 'Email already subscribed.' });
      }
      return res.status(500).json({ error: 'Database error.' });
    }
    res.status(201).json({ message: 'Subscription successful.', id: this.lastID });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
