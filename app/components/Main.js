import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
			categories: []
		};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.renderResults = this.renderResults.bind(this);
	}
	componentDidMount() {
			axios.get('/posts/categories').then( results => {
			console.log(`return results.data: ${results.data}`);
			this.setState({categories: results.data});
	  });
	}
	renderResults() {
		if (this.state.categories === []) {
			return
		}
		else {
			console.log("renderResults is working");
			return this.state.categories.map( 
					(category) => (						
					<div key={category}>	
            <a href={`/#/listing/${category}`}>{category}</a>
					</div>
			));
		}
	}
	render() {
		console.log("main....");
		return (
		<div className="container">
	      <div className="jumbotron">
	        <h2><strong>Reddit!</strong></h2>
			    <a href="/"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
				<span> | </span>
 			    <a href="/#/add">Add New Category</a>
	      </div>
	      <div className="row">
	        {/* This code will dump the correct Child Component */}
	        {this.props.children}
					
	      </div>
		  <h4>Categories</h4>
			<div>
				{this.renderResults()}
			</div>
	    </div>
		);
	}
}
