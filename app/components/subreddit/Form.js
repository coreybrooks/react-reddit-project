import React, {Component} from "react"

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            subredditId: "",
            title: "",
            content: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }
componentDidMount() {
  console.log("form this.props.params " + JSON.stringify(this.props.subredditId));
  this.setState({subredditId: this.props.subredditId});
}
handleChange(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
}
handleSubmit(event){
  console.log("handleSubmit is working");
  event.preventDefault();
  this.props.setTerms(this.state);
  this.setState({subredditId: "", title: "", content: "", comments: ""});
}
render() {
    return (
        <div className="container">
          <a href="/"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="text-center">Make a new post!!</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <h2 className="text-center">Subreddit Category: {this.state.subredditId}</h2>
                         <h4>Title</h4>    
                        <input
                         type="string" 
                         value={this.state.title}
                         className="form-control"
                         id="title"
                         onChange={this.handleChange}
                         />

                        <h4>Content</h4>    
                        <input
                         type="string" 
                         value={this.state.content}
                         className="form-control"
                         id="content"
                         onChange={this.handleChange}
                         />

                        <button 
                        className="btn btn-success"
                        id="submitButton"
                        type="submit"
                        >SUBMIT</button>
                       </div>
                      </form>   
                 </div>
              </div>
            </div>  
          </div>
        </div>

    );

  }
}