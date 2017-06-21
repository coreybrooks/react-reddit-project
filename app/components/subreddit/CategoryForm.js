import React, {Component} from "react";
import axios from "axios";

export default class CategoryForm extends Component {
    constructor() {
        super();

        this.state = {
            subredditId: "",
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }
handleChange(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
}
handleSubmit(event){
  console.log("handleSubmit is working");
  event.preventDefault();
  var data= this.state;
  axios.post(`/posts/by-subreddit/${this.state.subredditId}`, data);
  this.setState({subredditId: "", title: ""});
}
render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="text-center">Make a New Category!!</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <h4> New Subreddit Category</h4>
                        <input
                         type="string" 
                         value={this.state.subredditId}
                         className="form-control"
                         id="subredditId"
                         onChange={this.handleChange}
                         />

                        <button 
                        className="btn btn-success"
                        id="submitButton"
                        type="submit"
                        >SUBMIT</button>
                       </div>
                      </form>   
                        <a href="/"><button
                        className="btn btn-danger"
                        id="closeButton"
                        >CLOSE</button></a>

                 </div>
              </div>
            </div>  
          </div>
        </div>

    );

  }
}