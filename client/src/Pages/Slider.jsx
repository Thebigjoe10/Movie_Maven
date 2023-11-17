import React, { useEffect, useRef, useState } from "react";
import { fetchTrendingVideos } from "../Services/GlobalApi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider() {
  const screenWidth = window.innerWidth;
  const [movies, setMovies] = useState([]);
  const elementRef = useRef();
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
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <FaChevronLeft
        className=" hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <FaChevronRight
        className=" hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movies.map((item, index) => (
          <img
            src={ import.meta.env.VITE_MOVIE_BASE_IMG + item.poster_path}
            key={index}
            alt="Movies"
            className="min-w-full md:h-[350px] object-center mr-5 rounded-md hover:border-[4px] border-less-blue transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
}
