const db = require('../db/db');

class Company {
  static getAll(callback) {
    db.all('SELECT * FROM companies', callback);
  }

  static createCompany(name, callback) {
    db.run('INSERT INTO companies (name) VALUES (?)', [name], callback);
  }
}

module.exports = Company;