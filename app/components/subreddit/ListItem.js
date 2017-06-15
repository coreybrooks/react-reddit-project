import React, { Component } from 'react';

export default class ListItem extends Component {
	constructor() {
		super();

		this.state = {
			title: "",
			reference: ""
		};
	}
	componentDidMount() {
		console.log("component mounted");
		var temp = `/#/${this.props.post.subredditId}/${this.props.post.title}`;
		temp = temp.replace(/ /g, '');
     	this.setState({reference: temp});
		this.setState({title: this.props.post.title});
	}

	render() {
		console.log(`title within render: ${this.state.title}`);
		console.log(`reference within title: ${this.state.reference}`)
		return (
			<li>
				<h2><a href={this.state.reference}>{this.props.post.title}</a></h2>
				<p>{this.props.post.content}</p>
			</li>
		);
	}
}
