import React, { Component } from 'react';

export default class ListItem extends Component {
	constructor() {
		super();

		this.state = {
			title: "",
            comments: ""
		};
	}
	componentDidMount() {
        console.log(`CommentItem component mounted, this.props.post.comment: ${JSON.stringify(this.props.post.comments)}`);
		this.setState({title: this.props.post.title});
        this.setState({comments: this.props.post.comments});
	}

	render() {
		console.log(`title within render: ${this.state.title}`);
		console.log(`reference within title: ${this.state.reference}`)
		return (
            <div>

                <li>
                    <p>{this.state.comments}</p>
                </li>
            </div>
		);
	}
}
