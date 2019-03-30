import axios from "axios";

const apiKey = "AIzaSyAXjxn4RA7qiF5kifWA_FGzVBoSah98c_E";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

export default {

  searchBooks: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  // searchBooks: function (term) {
  //   return axios.get(`https://www.googleapis.com/books/v1/volumes?`, {
  //     params: {
  //       key: apiKey,
  //       q: term,
  //       maxResults: 10
  //     }
  //   })
  // },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};