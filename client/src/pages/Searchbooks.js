import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Searchbooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <Col size="md-12">
            <div style={{ border: "2px solid black", padding: "50px" }}>
              <h3>Book Search</h3>
              <form>
                <Input name="book" placeholder="Book" />
                <FormBtn>Search</FormBtn>
              </form>
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Searchbooks;
