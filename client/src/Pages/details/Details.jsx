import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../Services/GlobalApi'; // Replace with your actual API function

export default function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(id);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='text-white'>{movieDetails.title}</h1>
      <p className='text-white'>{movieDetails.overview}</p>
      <p className='text-white'>Rating: {movieDetails.vote_average}</p>
      {/* Render reviews here */}
    </div>
  );
}
