import React from 'react';

var AddMovie = (props) => {


	return (
	  <form className='add-bar' >
	  	<input type='text' id='add-query' value={props.value} onSubmit={props.handleAdd}/>
	  	<button type='button' className='search-button btn btn-primary' onClick={() => props.handleClick()}> 
	  		Add Movie 
	  	</button>
	  </form>
	)
}

export default AddMovie;