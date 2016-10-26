import React from "react";

//book element 
export default class Book extends React.Component {
  constructor(props) {
    super();
  }
 
  render() {
    //book properties from json data
    const { id, cover, author, title, year } = this.props;
    
    //book element styles start
    const bookElementWrapper = {
      marginBottom: '2%',
      listStyle: 'none',
    };
    const bookElement = {
      color: '#1b6985', 
      cursor: 'pointer',
      border: '2px solid #DDDDDD',
      background: '#FFFFFF',     
      width: '90%',
      margin: '0 auto',
    };
    const bookTitle = {
      textAlign: 'center',
      listStyle: 'none',
      margin: '4% 3%',
      fontFamily: 'Josefin Sans',
      textTransform: 'uppercase',
      fontSize: '24px',
      color: '#1b6985',
    };
    const bookCoverWrapper = {
      width: '60%',
      margin: '0 auto' 
    };
    const bookCover = {
      width: '100%',
      display: 'block', 
    };
    const bookLabel = {
      fontWeight: '600',
      color: '#A73C2D', 
    };
    const bookDetailsWrapper = {
      textAlign:'center',
      margin: '2% 0',
      fontFamily: 'Playfair Display',
      fontSize: '16px',
      color: '#293b41',
    };
    //book element styles end

    //return JSX for book element
    return (
      <li className="col-lg-4 col-md-6 col-xs-12" style={bookElementWrapper} id={id}>
        <div style={bookElement}>
          <h1 style={bookTitle}>{title}</h1>
          <div style={bookCoverWrapper}>
             <img style={bookCover} src={cover}/>
          </div>
          <div style={bookDetailsWrapper}>
            <div><span style={bookLabel}>BY:</span> {author}</div>
            <div><span style={bookLabel}>PUBLISHED:</span> {year}</div>
          </div>
        </div>
      </li>
    );
  }
}
