var User = require('../models/user.model.server');

// List all users
exports.list = function(req, res, next) {
	User.find({}, // Query object 
			  (err, users) => { // Callback
		if (err) {
			return next(err);
		} else {
			res.status(200).json(users);
		}
	});
};