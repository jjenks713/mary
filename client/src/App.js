import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav"
import API from "./utils/API";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: [],
      books: ""
    };
  };

  // addBooks = data => {
  //   console.log(data.data);
  //   this.setState({title: data.data})
  //   // console.log(this.state.title)
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(this);
  //   this.setState({books: this.state.books})
  //   if (this.state) {
  //     API.searchBooks({
  //       query: this.state.title
  //     })
  //       .then(res => 
  //         // const books = res.data;
  //         this.addBooks(res.data)
  //       )
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (

      <div>
        {/* <Nav handleFormSubmit={this.handleFormSubmit} books={this.props.title}/> */}
        <Books title={this.state.title}/>
      </div>

    );
  };
};

export default App;
