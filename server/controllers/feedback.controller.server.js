var fs = require('fs')
const Feedback = require('mongoose').model('Feedback');

// List all users
exports.save = function(req,res,next) {
	const feedback = new Feedback(req.body);
	feedbackData.unshift(req.body);
	feedback.save((err) => {
		if(err){
			return next(err);
		}
		else{
			res.status(200).json(feedback);
		}
	})	 
	res.json(feedbackData);
};
// List all users
exports.list = function(req, res, next) {
	Feedback.find({}, // Query object 
			  (err, feedbacks) => { // Callback
		if (err) {
			return next(err);
		} else {
			res.status(200).json(feedbacks);
		}
	});
};

// Delete user
exports.delete = function(req, res, next) {
	req.user.remove(err => {
		if (err) {
			return next(err);
		} else {
			res.status(200).json(req.user);
		}
	})
};
