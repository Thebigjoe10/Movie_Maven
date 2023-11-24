/* eslint-disable react/prop-types */
import React from 'react'

export default function MovieCard({movie}) {
  return (
    <>
        <img src={import.meta.env.VITE_MOVIE_BASE_IMG + movie.poster_path}
          className='w-[110px] md:w-[200px] rounded-lg hover:border-[4px] border-less-blue hover:scale-110 transition-all duration-150 ease-in cursor-pointer'
        />
    </>
  )
}