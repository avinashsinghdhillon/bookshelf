import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

class Searchbooks extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  loadBooks = event => {
    event.preventDefault();
    API
    .getBooks(this.state.bookSearch)
    .then(res => {
      let results = res.data.items;
      const tempBooks = [];
      if(results.length > 0){
       for(let i = 0; i < results.length; i++){
        const item = {
          id: results[i].id,
          title: results[i].volumeInfo.title,
          author: results[i].volumeInfo.authors ? results[i].volumeInfo.authors[0]: "Not listed.",
          description: results[i].volumeInfo.description ? results[i].volumeInfo.description : "Not available.",
          image: results[i].volumeInfo.imageLinks? results[i].volumeInfo.imageLinks.thumbnail : "",
          link: results[i].volumeInfo.infoLink ? results[i].volumeInfo.infoLink : "#"
        }
        tempBooks.push(item);
       }
       this.setState({ books: tempBooks });
      }
    })
    .catch(err => {
      console.log("error: " + err.response)
    });
  };

  saveBook = event => {
    debugger;
    console.log("Row id: " + event.target.id);
    const saveNewBook = this.state.books.filter(book => book.id === event.target.id);

    API.saveBook({
      id: saveNewBook[0].id,
      title: saveNewBook[0].title,
      author: saveNewBook[0].author,
      description: saveNewBook[0].description,
      image: saveNewBook[0].thumbnail,
      link: saveNewBook[0].link
    })
      .then(res => alert("Book saved!"))
      .catch(err => console.log(err));
  }
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
                <Input 
                  name="bookSearch"
                  placeholder="Book"
                  onChange={this.handleInputChange}
                  value = {this.state.bookSearch}
                />
                <FormBtn
                  onClick={this.loadBooks}
                  text= "Search"
                  id=""
                >
                </FormBtn>
              </form>
              </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
            <Col size="md-12">
              {!this.state.books.length ? (
                <h3 className="text-center">No books to display</h3>
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
                        buttonText={"Save Book"}
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

export default Searchbooks;
