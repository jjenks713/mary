import axios from "axios";

const apiKey = process.env.apiKey;

export default {

  searchBooks: function (query) {
      // console.log(query.term, "looking for this");
       const searchWord = query.term;
    return axios.get(`https://www.googleapis.com/books/v1/volumes?`, {
      params: {
        key: apiKey,
        q: searchWord,
        maxResults: 20,
        country: "US"
      }
    })
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/pics");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/pics/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/pics/" + id);
  },
  // Saves a book to the database
  saveBook: function (picData) {
    // console.log(bookData);
    return axios.post("api/pics", picData);
  }
};