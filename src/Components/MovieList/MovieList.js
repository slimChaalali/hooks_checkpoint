import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({ movies }) => {
  return (
    <div className='cardd'>
      {movies.map((movie) =>
        <MovieCard moviees={movie} />
      )
      }
    </div>
  )
}

export default MovieList