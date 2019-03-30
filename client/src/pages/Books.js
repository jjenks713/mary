import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import Nav from "../components/Nav"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    // this.loadBooks();
  }

  saveBook = (id) => {

      API.saveBook({
        title: this.state.title,
      })
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  };
  // // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        
        <Container fluid>

          <Row>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Searched Books</h1>
              </Jumbotron>
              {this.props.title.length ? (
                <List>
                  {this.props.title.map(book => {
                    return (
                      <ListItem key={book._id}>
                        <a href={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </a>
                        <SaveBtn onClick={() => this.saveBook(book._id)} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <h1>Search for a book title</h1>
                  // <h3>{this.props.title}</h3>
                )}
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Saved Books</h1>
              </Jumbotron>
              {/* {this.props.title.length ? (
                <List>
                  {this.props.title.map(book => {
                    return (
                      <ListItem key={book._id}>
                        <a href={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </a>
                        <SaveBtn onClick={() => this.deleteBook(book._id)} />
                      </ListItem>
                    );
                  })}
                </List> */}
              {/* ) : (
                  <h3>{this.props.title}</h3>
                )} */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Books;
