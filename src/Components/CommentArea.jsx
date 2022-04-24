import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    commentFilter: "",
  };

  render() {
    return (
      <>
        <FormControl
          value={this.state.commentFilter}
          onChange={(e) =>
            this.setState({ commentFilter: e.target.value.toLocaleLowerCase() })
          }
        ></FormControl>
        <ul>
          {this.props.comments &&
            this.props.comments
              .filter((comment) =>
                comment.comment.toLowerCase().includes(this.state.commentFilter)
              )
              .map((comment) => (
                <CommentsList key={comment._id} comment={comment} />
              ))}
        </ul>

        <AddComment asin={this.props.asin} />
      </>
    );
  }
}

export default CommentArea;
