import dispatcher from "../dispatcher";

// export function createBook(text) {
//   dispatcher.dispatch({
//     type: "CREATE_TODO",
//     text,
//   });
// }

// export function deleteTodo(id) {
//   dispatcher.dispatch({
//     type: "DELETE_TODO",
//     id,
//   });
// }
 export function searchBooks(key,value) {
  dispatcher.dispatch({
    type: "SEARCH_BOOKS",
    key,
    value,
  });
}

export function reloadBooks() {
  // // axios("http://someurl.com/somedataendpoint").then((data) => {
  // //   console.log("got the data!", data);
  // // })
  // dispatcher.dispatch({type: "FETCH_BOOKS"});
  // setTimeout(() => {
  //   dispatcher.dispatch({type: "RECEIVE_BOOKS", books: [
  //     {
  //       id: 8484848484,
  //       text: "Go Shopping Again",
  //       complete: false
  //     },
  //     {
  //       id: 6262627272,
  //       text: "Hug Wife",
  //       complete: true
  //     },
  //   ]});

  //   // if(false){
  //   //   dispatcher.dispatch({type: "FETCH_TODOS_ERROR",)}    
  //   // }

  // }, 1000);
}
