import React, { Component } from "react";

class CommentsList extends Component {
  render() {
    return (
      <li className="text-dark">
        {this.props.comment.comment} - {this.props.comment.rate}
      </li>
    );
  }
}

export default CommentsList;
