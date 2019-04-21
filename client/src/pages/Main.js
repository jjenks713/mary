import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

  const imgUrl = "https://images.wallpaperscraft.com/image/art_supplies_paints_brushes_109981_1920x1080.jpg";

  const backImage1 = {
    backgroundImage: 'url(' + imgUrl + ')'
  };

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
                // console.log(res.data);
            })
            .catch(err => console.log(err));
        // console.log(this.state.savedBooks);
    };

    // // Loads all books  and sets them to this.state.books
    loadBooks = () => {

        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data, title: "" })
                // console.log(this.state.savedBooks);
            })
            .catch(err => console.log(err));
    };

    addBooks = data => {
        // console.log(data.items);
        this.setState({ books: data.items })
        // console.log(this.state.books)
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

                <Container fluid>

                    <Row>
                        <Col size="md-12 sm-12">
                            <Jumbotron>
                                <div >
                                <h1 className="text-secondary">So much about me!</h1>
                                </div>
                            </Jumbotron>
                            {this.state.savedBooks.length ? (
                                <List>
                                    {this.state.savedBooks.map(book => {
                                        return (
                                            <ListItem key={book._id}>
                                                <a href={book.link} target="_blank">
                                                    <img src={book.imageLink}></img><br></br>
                                                    <strong>
                                                        Title: {book.title}
                                                    </strong><br></br>
                                                    <strong>
                                                        Author: {book.author}
                                                    </strong>
                                                </a><br></br>
                                                <a>
                                                    <strong>
                                                        Description:<br></br>
                                                        {book.description}
                                                    </strong>
                                                </a><br></br>
                                                <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            ) : (
                                    <h1 style={{ textAlign: "center" }}>No Saved Books<br></br>
                                    </h1>

                                    // <h3>{this.props.title}</h3>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Books;