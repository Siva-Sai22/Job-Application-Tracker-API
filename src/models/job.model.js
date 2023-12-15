const db = require('../db/db');

class Job {
  static getAll(callback) {
    db.all('SELECT * FROM jobs', callback);
  }

  static createJob(job, callback) {
    const { title, company_id, status, deadline } = job;
    db.run('INSERT INTO jobs (title, company_id, status, deadline) VALUES (?, ?, ?, ?)', [title, company_id, status, deadline], callback);
  }
}

module.exports = Job;
