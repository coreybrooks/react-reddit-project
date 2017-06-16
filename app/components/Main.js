import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
			categories: []
		};
	}
	handleClick() {
		axios.get('/categories').then( results => {
			var temp = results.data;
			console.log(`return data: ${temp}`);
			this.setState({categories: results});
		});
	}
	render() {
		console.log("main....");
		return (
			<div className="container">
	      <div className="jumbotron">
	        <h2><strong>Reddit!</strong></h2>
 			    <a href="/#/add">Add New Category</a>
					<a href="/posts/categories">
					<button 
					className="btn btn-success"
					onClick={this.handleClick}>Categories</button></a>
	      </div>

	      <div className="row">
	        {/* This code will dump the correct Child Component */}
	        {this.props.children}
	      </div>
	    </div>
		);
	}
}
