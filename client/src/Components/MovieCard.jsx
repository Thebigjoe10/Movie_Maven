/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ImageSkeleton from './ImageSkeleton';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <Link to={`/details/${movie.id}`}>
        {!imageLoaded && <ImageSkeleton />}
        <img
          src={import.meta.env.VITE_MOVIE_BASE_IMG + movie.poster_path}
          onLoad={() => setImageLoaded(true)}
          style={imageLoaded ? {} : { display: 'none' }}
          className='md:min-w-[260px] min-w-[170px] h-[310px] object-left-top mr-5 rounded-md hover:border-[4px] border-less-blue transition-all duration-100 ease-in'
          alt={movie.title}
        />
      </Link>
    </div>
  );
}