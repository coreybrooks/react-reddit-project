import React, { Component } from 'react';

import axios from 'axios';
import ListItem from './ListItem';
import Form from "./Form";

export default class Listing extends Component {
	constructor() {
		super();

		this.state = {
			posts: [],
            subredditId: "",
            postTitle: "",
            postContent: "",
            comments: ""

		}
	}

	componentDidMount() {
		axios.get('/posts/by-subreddit/' + this.props.params.subredditId).then(posts => {
			this.setState({ posts: posts.data });
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.subredditId !== nextProps.params.subredditId) {
			axios.get('/posts/by-subreddit/' + nextProps.params.subredditId).then(posts => {
				this.setState({ posts: posts.data });
			});
		}
	}
	setTerms(data) {
		var subredditId = data.subredditId;
		var title = data.title;
		var content = data.content;
		var comments = data.comments;
		console.log(`setTerms is working, data: ${subredditId}, ${title}, ${content}, ${comments}`);
		axios.post('/posts/by-subreddit/' + data.subredditId, data);		
	}
	render() {
		return (
		  <div>	
			<ul>
				{this.state.posts.map(post => <ListItem key={post._id} post={post} />)}
			</ul>
		  </div>
		);
	}
}
