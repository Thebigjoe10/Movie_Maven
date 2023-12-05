import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../Services/GlobalApi'; 
import playIconBlack from "../../assets/img/play-icon-black.png"
import playIconWhite from "../../assets/img/play-icon-white.png"


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
    <div className="relative min-h-[calc(100vh-250px)] overflow-x-hidden block top-18 px-[calc(3.5vw + 5px)]">
      <div className="left-0 opacity-80 fixed right-0 top-0 z-[-1]">
        <img alt={movieDetails.title} src={import.meta.env.VITE_MOVIE_BASE_IMG + movieDetails.poster_path} className="w-full h-screen" />
      </div>

      <div className="flex items-end justify-start h-[30vw] min-h-[170px] pb-6 w-full">
        {/* <img alt={movieDetails.title} src={import.meta.env.VITE_MOVIE_BASE_IMG + movieDetails.original_title} className="max-w-[600px] min-w-[200px] w-[35vw]" /> */}
      </div>

      <div className="max-w-[874px]">
      <div className="flex flex-col md:flex-row items-center flex-wrap h-14 mt-6">
  <button className="font-normal mr-6 px-6 h-14 rounded text-center text-uppercase bg-white text-black flex items-center justify-center text-sm leading-6 tracking-widest mb-2 md:mb-0">
    <img src={playIconBlack} alt="" className="w-8" />
    <span>Download</span>
  </button>

  <button className="font-normal mr-6 px-6 h-14 rounded text-center text-uppercase bg-black text-white border border-white flex items-center justify-center text-sm leading-6 tracking-widest mb-2 md:mb-0">
    <img src={playIconWhite} alt="" className="w-8" />
    <span>Trailer</span>
  </button>
          <div className="mr-4 h-11 w-11 flex justify-center items-center bg-black rounded-full border border-white cursor-pointer">
            <span className="bg-white block w-1 h-1"></span>
            <span className="bg-white block w-1 h-1"></span>
          </div>
        </div>

        <h2 className="text-white text-sm mt-1">{movieDetails.vote_average}</h2>
        <h3 className="text-white text-lg leading-7 mt-4">{movieDetails.overview}</h3>
      </div>
    </div>
  );
}
