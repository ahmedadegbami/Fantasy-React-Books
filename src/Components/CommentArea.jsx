import React, { Component } from "react";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {};

  render() {
    return (
      <ul>
        {this.props.comments &&
          this.props.comments.map((comment) => (
            <CommentsList key={comment._id} comment={comment} />
          ))}
      </ul>
    );
  }
}

export default CommentArea;
