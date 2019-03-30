import React, { Component } from "react";
import { Input, FormBtn } from "../Form";

class Nav extends Component {
  // Setting our component's initial state
  state = {
   title: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

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
