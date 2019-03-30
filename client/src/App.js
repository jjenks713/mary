import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav"
import API from "./utils/API";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: []
    };
  };

  addBooks = data => {
    console.log(data.data);
    this.setState({title: data.data})
    // console.log(this.state.title)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.title) {
      API.searchBooks({
        title: this.state.title,
      })
        .then(res => 
          // const books = res.data;
          this.addBooks(res.data)
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <div>
        <Nav handleFormSubmit={this.handleFormSubmit} />
        <Books title={this.state.title}/>
      </div>

    );
  };
};

export default App;
