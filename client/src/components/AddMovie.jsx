import React from 'react';

var AddMovie = (props) => {

	return (
	  <form className='add-bar' onSubmit={props.handleAdd}>
	  	<label>
		  	<input type='text' id='add-query' placeholder="Add movie to list" value={props.addValue} onChange={props.handleChangeAdd}/>
	  	</label>
	  	<button type='submit' className='search-button btn btn-primary'> 
	  		Add Movie 
	  	</button>
	  </form>
	)
}

export default AddMovie;