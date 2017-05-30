const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FeedbackSchema = new Schema({
	id: Number,
	name: String,
	title: String,
	message: String
});

mongoose.model('Feedback', FeedbackSchema);