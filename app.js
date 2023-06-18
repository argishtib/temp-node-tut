const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/ACTIV_Web_App_DB.db');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let query = `SELECT COUNT(*) FROM TASK WHERE PROJ_ID = 370`;
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});