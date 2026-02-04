const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./db/database.sqlite');

db.run(`
  CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    lesson TEXT,
    score INTEGER
  )
`);

app.post('/api/score', (req, res) => {
  const { name, lesson, score } = req.body;
  db.run(
    'INSERT INTO scores (name, lesson, score) VALUES (?, ?, ?)',
    [name, lesson, score],
    () => res.json({ status: 'saved' })
  );
});

app.get('/api/scores', (req, res) => {
  db.all('SELECT * FROM scores', (err, rows) => {
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
