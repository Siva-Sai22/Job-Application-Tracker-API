const express = require('express');
const Job = require('../models/job.model');

const router = express.Router();

router.get('/jobs', (req, res) => {
  Job.getAll((err, jobs) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(jobs);
  });
});

router.post('/jobs', (req, res) => {
  const job = req.body;

  Job.createJob(job, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'Job created successfully' });
  });
});

module.exports = router;
