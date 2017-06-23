import React, {Component} from "react"

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            subredditId: "",
            title: "",
            content: "",
            comments: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }
componentDidMount() {
  console.log("componentDidMount this.props.title " + JSON.stringify(this.props.title));
}
componentWillReceiveProps() {
  console.log(`this.props.title: ${this.props.title}`);
  this.setState({subredditId: this.props.subredditId});
  this.setState({title: this.props.title});

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
        <div>
          <div className="row">
            <div className="col-md-12">
              <a href="/"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="text-center">Comment Section</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">                          
                        <h4 className="text-center">Subreddit Category: {this.state.subredditId}</h4>
                        <h3 className="commentTitle">{this.props.title}</h3>    
                        <h5>New Comments</h5>    
                        <input
                         type="string" 
                         value={this.state.comments}
                         className="form-control"
                         id="comments"
                         rows="3"
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