import React from "react";
import Radium from "radium";
import Book from "../components/Book";
import * as BookActions from "../actions/BookActions";
import BookStore from "../stores/BookStore";
import BooksSearchModule from "../components/BooksSearchModule";


class Books extends React.Component {
  constructor() {
    super();
    this.fetchAllBooksFromStore = this.fetchAllBooksFromStore.bind(this);
    this.state = {
      books: BookStore.fetchAllBooks(),
      key: "title",
      query: "",
    };       
    
  }

  componentWillMount() {
    document.body.style.backgroundColor = "#F5F8FA";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  fetchAllBooksFromStore() {
    this.setState({
      books: BookStore.fetchAllBooks(),
    });
  }

  //function passed to searchmodule via props...fired when search module is submitted
  filterBooksBySearch(key,value) {
    //update state by search parameters passed from search module to actions to store
    this.setState({
      key: key,
      query: value.toLowerCase()
    });
  }


  render() {

    //book application styles start
    const applicationHeader = {
      textAlign: 'center',
      margin: '0',
      padding: '3% 0',
      fontFamily: 'Josefin Sans',
      background: '#293b41',
      color: '#F2F4F5',
      '@media screen and (max-width: 768px)': {
        fontSize: '22px',
      },
      '@media screen and (max-width: 500px)': {
        fontSize: '16px',
      }
    };
    //book application styles end

    const { books } = this.state;
    const key = this.state.key;
    const query = this.state.query;

    //filter books using key and value
    let filteredBooks = books.filter(
      (book) => {
        return book[key].toString().toLowerCase().indexOf(query) !== -1;
      }
    );

    //
    const BookComponents = filteredBooks.map((book) => {
        return <Book key={book.id} {...book}/>;
    });
   

    //render book application
    return (
      
      <div>        
        <h1 style={applicationHeader}>Brec's React-FLUX Book Application</h1>
          <BooksSearchModule filterBooksBySearch={this.filterBooksBySearch.bind(this)}/>
        <ul className="container" >{BookComponents}</ul>
      </div>
     
    );
  }
}
export default Radium(Books) 