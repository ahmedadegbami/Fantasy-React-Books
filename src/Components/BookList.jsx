import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((onebook) =>
              onebook.title
                .toLowerCase()
                .includes(this.state.query.toLocaleLowerCase())
            )
            .map((onebook) => (
              <Col xs={3}>
                <SingleBook book={onebook} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
