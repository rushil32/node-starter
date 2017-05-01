const express = require('express');
const router = express.Router();
const users = require('../controllers/user.controller.server');

// Test route
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all events
router.get('/events/list',users.list);

module.exports = router;	