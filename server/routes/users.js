const express = require('express');
const router = express.Router();
const users = require('../controllers/user.controller.server');

// Get all users
router.get('/users/list', users.list);

router.psot('/users/login', users.login);

module.exports = router;	