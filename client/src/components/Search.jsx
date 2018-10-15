import React from 'react';

var Search = (props) => {

	return (
	  <form className='search-bar' onSubmit={props.handleSearch}>
	  	<label>
		  	<input type='text' id='search-query' placeholder="Search for movie" size="30" value={props.searchValue} onChange={props.handleChangeSearch}/>
	  	</label>
	  	<button type='submit' className='search-button btn btn-primary'> 
	  		Search 
	  	</button>
	  </form>
	)
}

export default Search;





	// this.handleSubmit = this.handleSubmit.bind(this);
	// handleSubmit((event) => {
	// 	event.preventDefault();
	// 	props.handleClick({document.getElementById('search-query').value});
	// }

	 