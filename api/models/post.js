const mongoose = require('mongoose');

const Post = new mongoose.Schema({
	subredditId: {
    	type: String,
		trim: true
	},
	title: String,
    comments: Array,
	content: String

});

module.exports = mongoose.model('post', Post);
