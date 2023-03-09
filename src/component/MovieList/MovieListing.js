import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';

function MovieListing() {
    const movies=useSelector(getAllMovies)
    console.log('movies',movies);
   
    let renderMovies = "";
    renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index) => {
        return(
        <MovieCard key={index} data={movie} />)
    })


    ) : (<div className="movies.error"><h1>{movies.Error}</h1></div>)

  return (
    <div className='movie-wrapper'>
        <h2>ddd</h2>
        {renderMovies}
      
    </div>
  )
}

export default MovieListing
