
import Link from 'next/link';
import React from 'react'
export default async function home() {
  let response = await fetch("https://www.omdbapi.com/?s=batman&type=movie&apikey=ceb28737&page=2")
  const data = await response.json();
  const movies = data?.Search
  return (

<div className='text-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
  {
    movies?.map((movie)=>(
      <div key={movie?.imdbID} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 center">
    <div className='h-62 rounded-lg bg-gary-200 p-1'>
        <img style={{height:'300px'}} className="w-full" src={movie?.Poster} alt="poster_movie" />
    </div>
    <div className="p-5">
        <h2>{movie?.Title}</h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie?.Year}</p>
        <Link href={`movie/${movie?.imdbID}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
    </div>
    ))
  }

</div>
  )
}
