import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

class App extends Component {
  renderButton() {}
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

export default App;
