import React, { Component } from 'react';

import axios from 'axios';
import CommentItem from './CommentItem';
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
   		console.log("Comments component mounted");
		axios.get('/posts/comments/' + this.props.params.subredditId + "/" + this.props.params.title).then(posts => {
			console.log(`Comment component posts: ${JSON.stringify(posts.data)}`);

            this.setState({ posts: posts.data });
            this.setState({ postTitle: posts.data[0].title});
            this.setState({ postContent: posts.data[0].content});
		});
	}

	/*componentWillReceiveProps(nextProps) {
		if (this.props.params.subredditId !== nextProps.params.subredditId) {
			axios.get('/posts/by-subreddit/' + nextProps.params.subredditId).then(posts => {
				this.setState({ posts: posts.data });
			});
		}
	}*/
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
			  <Form setTerms={this.setTerms} />
                <h6>{this.state.postContent}</h6>
                <h3>{this.state.postTitle}</h3>
                <h5>Comments</h5>

			<ul>
				{this.state.posts.map(post => <CommentItem key={post._id} post={post} />)}
			</ul>
		  </div>
		);
	}
}
