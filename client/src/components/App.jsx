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
      filteredMovies: movies.slice(),
      query: '',
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


  handleChange(event) {
      // console.log(event.target.value)
      // console.log(this.state.query)
      this.setState({
        query: event.target.value
      })
    }


  handleClick(query) {
    // var element = document.getElementById("search-query").value;
    var results = this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(this.state.searchquery.toLowerCase()));
    if (results.length === 0) {
      results.push({title: 'No movies found'});
    }
    this.setState({
      filteredMovies: results,
      query: '' 
    });
  }

  handleAdd(query) {
    var element = document.getElementById("add-query").value;
    var results = this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    if (results.length === 0) {
      results.push({title: 'No movies found'});
    }
    this.setState({
      filteredMovies: results,
      query: '' 
    });
  }


  render() {
    return (
      <div className="movie-list">
        <h1> Movie List </h1>
        <div>
          <AddMovie handleClick={this.handleClick.bind(this)} handleChange={this.handleChange.bind(this)} value={this.state.addQuery}/>
        </div>
        <div>
          <Search handleClick={this.handleClick.bind(this)} handleChange={this.handleChange.bind(this)} value={this.state.searchQuery}/>
        </div>
        <div>
          <MovieList movies={this.state.filteredMovies}/> 
        </div>
      </div>
    );
  }
}

export default App;


        
    // <ul>
    //   <li>Instagram</li>
    //   <li>WhatsApp</li>
    //   <li>Oculus</li>
    // </ul>


