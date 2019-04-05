import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    savedBooks: []
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    API.getBooks()
      .then(res => {
        this.setState({ savedBooks: res.data })
        console.log(res.data);
      })
      .catch(err => console.log(err));
    console.log(this.state.savedBooks);
  };



  // // Loads all books  and sets them to this.state.books
  loadBooks = () => {

    API.getBooks()
      .then(res => {
        this.setState({ savedBooks: res.data, title: "" })
        console.log(this.state.savedBooks);
      })
      .catch(err => console.log(err));
  };

  addBooks = data => {
    console.log(data.items);
    this.setState({ books: data.items })
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
        term: this.state.title
      })
        .then(res => {
          // const books = res.data;
          console.log(res.data)
          this.addBooks(res.data)
        })
        .catch(err => console.log(err));
    }
  };

  saveABook = id => {
    console.log(id, this.state.books);

    for (var i = 0; i < this.state.books.length; i++) {
      // console.log(this.state.books[i].id);
      const saveBook = this.state.books[i];
      // console.log(saveBook.volumeInfo.title);
      if (id === saveBook.id) {
        console.log(saveBook.volumeInfo.title)
        API.saveBook({
          title: saveBook.volumeInfo.title,
          author: saveBook.volumeInfo.authors[0],
          link: saveBook.volumeInfo.previewLink,
          imageLink: saveBook.volumeInfo.imageLinks.thumbnail,
          description: saveBook.volumeInfo.description,
          saved: true,
        }).then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
    };
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <img src="./favicon.ico" style={{ marginRight: 10 }}></img>
          <a className="navbar-brand" href="/">
            Google Book Search
          </a>
          <form className="form-inline my-2 my-lg-0">
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn
              onClick={this.handleFormSubmit}
            >
              Search for Book
              </FormBtn>
          </form>
        </nav>
        <Container fluid>

          <Row>
            <Col size="md-12 sm-12">
              <Jumbotron>
                <h1>Searched Books</h1>
              </Jumbotron>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => {
                    return (
                      <ListItem key={book.id}>
                        <a href={book.volumeInfo.previewLink} target="_blank">
                          <img src={book.volumeInfo.imageLinks.thumbnail}></img><br></br>
                          <strong>
                            Title: {book.volumeInfo.title}
                          </strong><br></br>
                          <strong>
                            Author: {book.volumeInfo.authors}
                          </strong><br></br>
                        </a>
                        <a>
                          <strong>
                            Description:<br></br>
                            {book.volumeInfo.description}
                          </strong>
                        </a>
                        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                          <SaveBtn onClick={() => this.saveABook(book.id)} />
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h1 style={{ textAlign: "center" }}>Search for a book title</h1>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Books;