import React from 'react';
import movies from "../data/movieData.js"
import MovieListEntry from './MovieListEntry.jsx';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import Request from '../../ajax.js';
// import $ from 'jquery'; //just for ajax request


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: movies,
      filteredMovies: movies,
      searchQuery: '',
      addQuery: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);  
  }

  componentDidMount() {
  // get the current votes from the server (GET request)
  // ajax get request
  }


  handleSubmit(event) {
  // use a POST request to create on server
  // ajax post request
    event.preventDefault();
    Request.create(event.target.value)
  }


  handleChangeSearch(event) {
    this.setState({
      searchQuery: event.target.value
    })
    // console.log(this.state.searchQuery)
    // console.log(event.target.value)
  }


  handleSearch(event) {
    // var element = document.getElementById("search-query").value;
    // console.log(this.state.filteredMovies)
    // console.log(this.state.searchQuery)
    var results = this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
    if (results.length === 0) {
      results.push({title: 'No movies found'});
    }
    this.setState({
      filteredMovies: results
    });
    event.preventDefault();
  }


  handleChangeAdd(event) {
    this.setState({
      addQuery: event.target.value
    })
    console.log(this.state.addQuery)
  }


  handleAdd(event) {
    var results = this.state.allMovies;  
    results.push({title: this.state.addQuery});    // pushing data into my movies data
    console.log(results);

    this.setState({
      filteredMovies: results
    });
    event.preventDefault();
  }


  render() {
    return (
      <div className="movie-list">
        <h1 className='title'> Movie List </h1>
        
        <AddMovie addValue={this.state.addQuery} handleChangeAdd={this.handleChangeAdd.bind(this)} handleAdd={this.handleAdd.bind(this)} />
     
        <Search searchValue={this.state.searchQuery} handleChangeSearch={this.handleChangeSearch.bind(this)} handleSearch={this.handleSearch.bind(this)} />
      
        <MovieList movies={this.state.filteredMovies}/> 
       
      </div>
    );
  }
}

export default App;


 


