import React, { Component } from 'react';

import axios from 'axios';
import CommentItem from './CommentItem';
import CommentForm from "./CommentForm";

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
   		console.log("Comments component mounted, this.props.params " + JSON.stringify(this.props.params));
		axios.get('/posts/comments/' + this.props.params.subredditId + "/" + this.props.params.title).then(posts => {
			console.log(`Comment component posts.data: ${JSON.stringify(posts.data)}`);

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
		  <body>	
			<div className="container">	
				<CommentForm 
				setTerms={this.setTerms} 
				subredditId={this.props.params.subredditId}
				title={this.state.postTitle}
				content={this.state.postContent}
				/>

					<h6>{this.state.postContent}</h6>
					<h3>Comments</h3>

				<ul>
					{this.state.posts.map(post => <CommentItem key={post._id} post={post} />)}
				</ul>
			</div>
		  </body>
		);
	}
}
