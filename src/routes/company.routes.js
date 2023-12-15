const express = require('express');
const Company = require('../models/company.model');

const router = express.Router();

router.get('/companies', (req, res) => {
  Company.getAll((err, companies) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(companies);
  });
});

router.post('/companies', (req, res) => {
  const { name } = req.body;

  Company.createCompany(name, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'Company created successfully' });
  });
});

module.exports = router;
