import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Savedbooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  loadSavedBooks = () => {
    API.getSavedBooks()
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
              <h3>Saved Books</h3>
              </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
            <Col size="md-12">
              {!this.state.books.length ? (
                <h3 className="text-center">No saved books</h3>
              ) : (
                <List>
                  {this.state.books.map(book => {
                    return (
                      <ListItem
                        key={book.id}
                        id = {book.id}
                        title={book.title}
                        author={book.author}
                        link={book.link}
                        description={book.description}
                        image={book.image}
                        onClick={this.saveBook}
                        buttonText={"Delete Book"}
                      />
                    );
                  })}
                </List>
              )}
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Savedbooks;
