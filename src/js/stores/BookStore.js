import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class BookStore extends EventEmitter {
  constructor() {
    super()
    var booksData = require('json!../../../books.json');
    var data = booksData;
    this.books = data;
  }

  // createTodo(text) { 
  //   const id = Date.now();

  //   this.todos.push({
  //     id,
  //     text,
  //     complete: false,
  //   });

  //   this.emit("change");
  // }

  
  searchBooks(key,value){
    console.log(key+","+value);
  }

  fetchAllBooks() {
    return this.books;
  }

  handleActions(action) {
    switch(action.type) {
      case "SEARCH_BOOKS": {
        this.searchBooks(action.key,action.value);
        break;
      }
   
    }
  }

}

const bookStore = new BookStore;
dispatcher.register(bookStore.handleActions.bind(bookStore));
window.dispatcher = dispatcher;
export default bookStore;
