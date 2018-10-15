import React from 'react';

var AddMovie = (props) => {

	return (
	  <form className='add-bar' onSubmit={props.handleAdd}>
	  	<label>
	  		Add to List
		  	<input type='text' id='add-query' value={props.addValue} onChange={props.handleChangeAdd}/>
	  	</label>
	  	<button type='submit' className='search-button btn btn-primary'> 
	  		Add Movie 
	  	</button>
	  </form>
	)
}

export default AddMovie;