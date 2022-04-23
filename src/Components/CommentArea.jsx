import React, { Component } from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    commentFilter: "",
    formItems: {
      comment: "",
      rate: "",
    },
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
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="number" placeholder="Rate" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default CommentArea;
