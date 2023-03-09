import React from 'react'

function MovieCard(probs) {
  // console.log('data',data);
  const {data}=probs;
  return (
    <div>
      
   <img src={data.Poster} alt={data.Title}/>
   <h6>{data.Title}</h6>




    </div>
  )
}

export default MovieCard