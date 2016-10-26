import React from "react";
import * as BookActions from "../actions/BookActions";
import {StyleRoot} from 'radium';

export default class BooksSearchModule extends React.Component {
	constructor() {
		super();
		
		//initialize query in current state
		this.state = {
			query: "",
			key: "title",
		};
		//bind query change
		this.handleQueryChange = this.handleQueryChange.bind(this);
		//bind search type(key) change
		this.handleKeyChange = this.handleKeyChange.bind(this);
		//bind submit change
    	this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
	}

	//handle query submit
	handleQuerySubmit(event) {
    	//alert("Text field value is: '" + this.state.query + "' and the key is '" + this.state.key + "'");
  		this.props.filterBooksBySearch(this.state.key,this.state.query);  		

  	}
  	//handle key input change
  	handleKeyChange(event) {
    	this.setState({key: event.target.value});
  	}
  	//handle query input change
  	handleQueryChange(event) {
    	this.setState({query: event.target.value});
  	}	

	render(){
		//search module styles start
		const searchContainer = {
	      	marginBottom: '2%',
	      	overflow: 'hidden',
	      	background: '#293b41',
	      	padding: '5%',
	      	width: '100%',
	      	textAlign: 'center',
	    };
	    const searchLabel = {
	      fontSize: '14px',
	      padding: '0',
	      color: '#F2F4F5',
	      fontFamily: 'Montserrat',
	      display: 'inline-block',
	      textAlign: 'left',
	      marginBottom: '2%',
	      '@media screen and (max-width: 500px)': {
        	fontSize: '12px',
      	  },
      	  '@media screen and (max-width: 350px)': {
        	fontSize: '10px',
      	  }

	    };
	    const searchSelect = {
	      fontSize: '14px',
	      border: 'none',
	      display: 'inline-block',
	      marginBottom: '2%',
	      '@media screen and (max-width: 500px)': {
	    	fontSize: '12px',
	  	  },
	  	  '@media screen and (max-width: 350px)': {
	    	fontSize: '10px',
	  	  }
	    };
	    const searchInput = {
	      fontSize: '14px',
	      padding: '0',
	      paddingLeft: '5px',
	      border: 'none',
	      display: 'inline-block',
	      '@media screen and (max-width: 500px)': {
	    	fontSize: '12px',
	  	  },
	  	  '@media screen and (max-width: 350px)': {
	    	fontSize: '10px',
	  	  }
	    };
	    const searchSubmit = {
	      fontSize: '14px',
	      background: '#CCCCCC',
	      border: 'none',
	      padding: '0 3%',
	      color: '#293b41',
	      fontFamily: 'Montserrat',
	      display: 'inline-block',
          '@media screen and (max-width: 500px)': {
        	fontSize: '12px',
      	  },
      	  '@media screen and (max-width: 350px)': {
        	fontSize: '10px',
      	  }
	    };
	    
	    //search module styles end	

		return (	
			<StyleRoot>	
				<div className="col-lg-12" style={searchContainer}>

		            <span className="col-xs-3 col-xs-offset-1 col-sm-2 col-sm-offset-3 col-lg-2 col-lg-offset-1" style={searchLabel}>SEARCH BY:</span>
		            <select className="col-xs-5 col-xs-offset-1 col-sm-3 col-sm-offset-1 col-lg-2 col-lg-offset-0" value={this.state.key} style={searchSelect} onChange={this.handleKeyChange} >
		              <option value="title">Title</option>
		              <option value="author">Author</option>
		              <option value="year">Year of Publication</option>
		            </select>
		            <input className="col-xs-6 col-xs-offset-1 col-sm-4 col-sm-offset-3 col-lg-3 col-lg-offset-1" style={searchInput} type="text" placeholder="Search..." value={this.state.query} onChange={this.handleQueryChange}  />
		            <button className="col-xs-3 col-xs-offset-0 col-sm-2 col-sm-offset-0 col-lg-2 col-lg-offset-0" onClick={this.handleQuerySubmit} style={searchSubmit}>SEARCH</button>
	        	</div>
        	</StyleRoot>
		);
	}
}