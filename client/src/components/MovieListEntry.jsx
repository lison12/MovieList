import React from 'react';

var MovieListEntry = ({movie}) => (
	<div className="movie-list-entry">
		<div id={`${movie.title}`}> { movie.title } </div>
	</div>	
);


export default MovieListEntry;