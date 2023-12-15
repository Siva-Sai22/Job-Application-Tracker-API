const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('job_app_tracker.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS companies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      company_id INTEGER,
      status TEXT,
      deadline TEXT,
      FOREIGN KEY (company_id) REFERENCES companies(id)
    )
  `);
});

module.exports = db;
