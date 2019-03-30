import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form";

class Nav extends Component {
  // Setting our component's initial state
  state = {
    books: [],
  };

  componentDidMount() {
    // this.loadBooks();
  }

  displayBooks = () => {
    if (this.books) {

    }

    // API.searchBooks()
    // .then(res => 
    //   this.setState({books: res.data}, console.log(res.data))
    //   .catch(err => console.log(err))
    //   );
  }

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state.title);
  //   if (this.state.title) {
  //     API.searchBooks({
  //       title: this.state.title,
  //     })
  //       .then(res => console.log(res.data))
  //       .catch(err => console.log(err));
  //   }
  // };
  render() {
    return (
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
                onClick={this.props.handleFormSubmit}
              >
                Search for Book
              </FormBtn>
            </form>
      </nav>
        );
      };
    }
    
    export default Nav;
