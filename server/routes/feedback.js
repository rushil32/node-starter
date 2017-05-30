var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const feedback = require('../controllers/feedback.controller.server');

router.get('/feedback', feedback.list)

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/feedback/create', feedback.save);

router.delete('/feedback/delete/:id', feedback.delete);

module.exports = router;