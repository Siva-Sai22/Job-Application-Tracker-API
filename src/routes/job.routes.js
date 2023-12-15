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

router.put('/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = req.body;

  Job.updateJob(id, job, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'Job updated successfully' });
  });
});

router.delete('/jobs/:id', (req, res) => {
  const { id } = req.params;

  Job.deleteJob(id, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'Job deleted successfully' });
  });
});

module.exports = router;
