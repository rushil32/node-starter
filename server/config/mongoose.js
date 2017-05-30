const mongoose = require('mongoose');

module.exports = function() {
	const uri = 'mongodb://localhost/emanager';
	const db = mongoose.connect(uri);
	require('../models/feedback.server.model')
	return db;
};
