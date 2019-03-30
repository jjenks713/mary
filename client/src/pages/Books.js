import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    // this.loadBooks();
  }

  // saveBook = (id) => {

  //   API.saveBook({
  //     title: this.state.title,
  //   })
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  addBooks = data => {
    console.log(data.data);
    this.setState({books: data.data})
    console.log(this.state.books)
  };


  handleInputChange = event => {
    const title = event.target.value;
    this.setState({
      title
    });
    console.log(title);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this);
    // this.setState({books: this.state.books})
    if (this.state) {
      API.searchBooks({
        query: this.state.title
      })
        .then(res => 
          // const books = res.data;
          this.addBooks(res.data)
        )
        .catch(err => console.log(err));
    }
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Google Book Search
      </a>
          {/* <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          <form className="form-inline my-2 my-lg-0">
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn
              // disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Search for Book
              </FormBtn>
          </form>
        </nav>
        <Container fluid>

          <Row>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Searched Books</h1>
              </Jumbotron>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => {
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