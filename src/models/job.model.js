const db = require('../db/db');

class Job {
  static getAll(callback) {
    db.all('SELECT * FROM jobs', callback);
  }

  static createJob(job, callback) {
    const { title, company_id, status, deadline } = job;
    db.run('INSERT INTO jobs (title, company_id, status, deadline) VALUES (?, ?, ?, ?)', [title, company_id, status, deadline], callback);
  }

  static updateJob(id, job, callback) {
    const { title, company_id, status, deadline } = job;
    db.run('UPDATE jobs SET title = ?, company_id = ?, status = ?, deadline = ? WHERE id = ?', [title, company_id, status, deadline, id], callback);
  }

  static deleteJob(id, callback) {
    db.run('DELETE FROM jobs WHERE id = ?', [id], callback);
  }
}

module.exports = Job;
