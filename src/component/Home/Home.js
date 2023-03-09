import React, { useEffect } from 'react'
import MovieListing from '../MovieList/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
function Home() {
  const movieText = "Harry"
  const dispatch = useDispatch()
  useEffect(() => {
    
    const fetchData = async () => {
      const response = await movieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      )
      .catch((err) => {
          console.log("Errors",err);
        })
      console.log("Response",response);
      
      dispatch(addMovies(response.data))
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className='banner-img'>
        <MovieListing />

      </div>



    </div>
  )
}

export default Home