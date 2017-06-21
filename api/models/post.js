const mongoose = require('mongoose');

const Post = new mongoose.Schema({
	subredditId: {
    	type: String,
		trim: true
	},
	title: {
        type: String,
	},
	comments: {
		type: String,
	},
	content: {
		type: String,
	}

});

module.exports = mongoose.model('post', Post);
