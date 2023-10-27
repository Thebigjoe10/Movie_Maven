import React, { useEffect, useState } from "react";
import { fetchTrendingVideos } from "../Services/GlobalApi";

export default function Slider() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const response = await fetchTrendingVideos();
      console.log(response.data.results);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex overflow-x-auto">
  {movies.map((item, index) => 
    <img src={import.meta.env.VITE_MOVIE_BASE_IMG + item.backdrop_path} key={index} alt={`Movie ${index}`} 
        className="min-w-full h-[310px] object-cover"
    />
  )}
</div>

  );
}
