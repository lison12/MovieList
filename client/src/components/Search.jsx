import React from 'react';

var Search = (props) => {


	return (
	  <forms className='search-bar' >
	  	<input type='text' id='search-query' value={props.value} onChange={props.handleChange}/>
	  	<button type='button' className='search-button btn btn-primary' onClick={() => props.handleClick()}> 
	  		Search 
	  	</button>
	  </forms>
	)
}

export default Search;






	// onSubmit={this.handleSubmit}


	// this.handleSubmit = this.handleSubmit.bind(this);
	// handleSubmit((event) => {
	// 	event.preventDefault();
	// 	props.handleClick({document.getElementById('search-query').value});
	// }

	 