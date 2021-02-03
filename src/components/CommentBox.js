import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export class CommentBox extends Component {
  state = { comment: "" };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //call an action create
    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}> Fetch Comments</button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
