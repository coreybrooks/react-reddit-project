const mongoose = require('mongoose');

const Post = new mongoose.Schema({
	comments: Array,
	content: String,
	subredditId: {
    	type: String,
		trim: true,
		required: true,
		unique: true
	},
	title: {
		type: String,
		trim: true,
		required: true,
		unique: true
	}
});

module.exports = mongoose.model('post', Post);
