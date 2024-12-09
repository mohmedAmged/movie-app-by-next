import React from 'react'

export default async function moviepage({params}) {
    let {id} = await params

    let response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=ceb28737`)
    const data = await response.json();
    const movieDetails = data
    console.log(movieDetails);
  return (
    <div className='flex dark:bg-gray-900 justify-center mt-4 items-center p-5'>
      <div className=' w-1/3'>
        <img src={movieDetails?.Poster} alt={movieDetails?.Title}/>
      </div>
      <div className='w-1/3'>
        <h1 style={{fontSize:'20px', fontWeight:"bold"}} className='text-capitalize mb-4'>
          {movieDetails?.Title}
        </h1>
        <p className='text-capitalize mb-2'>
          <span style={{fontSize:'17px' , fontWeight:"bold"}}>Year:</span> {movieDetails?.Year}
        </p>
        <p className='text-capitalize mb-2'>
        <span style={{fontSize:'17px' , fontWeight:"bold"}}>Genre:</span> {movieDetails?.Genre}
        </p>
        <p className='text-capitalize mb-2'>
        <span style={{fontSize:'17px' , fontWeight:"bold"}}> Director:</span> {movieDetails?.Director}
        </p>
        <div className='mb-2'>
          <h4 className='text-capitalize'>
            <span style={{fontSize:'17px' , fontWeight:"bold"}}>Ratings:</span> 
          </h4>
          {
            movieDetails?.Ratings?.map((el,idx)=>(
              <p className='text-capitalize' key={idx}>
                {el.Source}: {el.Value}
              </p>
            ))
          }
        </div>
        <p className='text-capitalize mb-2'>
        <span style={{fontSize:'17px' , fontWeight:"bold"}}>Actors:</span> {movieDetails?.Actors}
        </p>
      </div>
    </div>
  )
}
