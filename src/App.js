import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import MoviesArray from './Components/Movies';
import Filter from './Components/Filter/Filter';

function App() {
  const [filteredMovies, setFilteredMovies] = useState(MoviesArray);

  return (

    <div className="App">
      <Filter movies={MoviesArray} setFilteredMovies={setFilteredMovies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
