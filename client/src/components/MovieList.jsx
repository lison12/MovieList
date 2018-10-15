import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({movies}) => (
	<div className="container-fluid" id="movie-list" >
		{movies.map((movie, i) => <MovieListEntry movie={movie} key={i}/>)}
	</div>
);


export default MovieList;