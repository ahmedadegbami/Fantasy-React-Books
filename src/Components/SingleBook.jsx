import React, { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    comments: [],

    selected: false,
  };

  render() {
    return (
      <Card className="text-dark">
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{
            border: this.state.selected ? "3px solid red" : "none",
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
          {this.state.selected && (
            <CommentArea comments={this.state.comments} />
          )}
        </Card.Body>
        {console.log(this.props.book.asin)}
      </Card>
    );
  }

  componentDidMount = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.book.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NTA2Mjg1NTksImV4cCI6MTY1MTgzODE1OX0.8rQ_g15Jrg8J1lJiYktntoJnA5uevfWv3jAdTA7GAGw",
        },
      }
    );
    const bookComments = await response.json();
    this.setState({ comments: bookComments });
  };
}

export default SingleBook;
