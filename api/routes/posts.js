const express = require('express')
const router = express.Router();

const Post = require('../models/post');

router.get('/by-subreddit/:subreddit', (req, res) => {
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
		res.json(results);
	});
});

router.get('/categories', (req, res) => {
	{/*return only the unique subredditId's*/}
	Post.find({}).distinct("subredditId").exec( (error, doc) => {
		console.log(`doc: ${doc}`);
		res.json(doc);
	});
});

router.post('/by-subreddit/:subreddit', (req, res) => {
	console.log("post route is working, req.body: " + JSON.stringify(req.body));
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');
	console.log(`subredditID: ${subredditId}`);

	var newPost = new Post(req.body);

	newPost.save(function(error, doc) {
		if (error) {
			res.send(error);
		}
		else {
			res.json(doc);
		}
	});
});
module.exports = router;
