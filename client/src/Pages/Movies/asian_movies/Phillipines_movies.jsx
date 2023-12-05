/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Slider from '../../../Components/Slider';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getPhillipineMovies } from '../../../Services/GlobalApi';
import MovieCard from '../../../Components/MovieCard';

export default function Phillipines_movies() {
  const [pmovies, setPmovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const elementRef = useRef(null);
  const screenWidth = window.innerWidth;

  const fetchMovies = async (page) => {
    try {
      const response = await getPhillipineMovies(page);
      console.log(response.data.results);
      setPmovies((prevMovies) => [...prevMovies, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching Philippine movies:', error);
    }
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  const loadNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    fetchMovies(currentPage + 1);
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
        // Fetch more Philippine movies when scrolled to the end
        loadNextPage();
      }
    };

    elementRef.current.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listener when component unmounts
      if (elementRef.current) {
        elementRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentPage]);

  return (
    <div>
      <Slider contentType="phillipine" />
      <div className= "p-8 px-8 md:px-16">
          <h1 className="text-[20px] font-bold text-white">Phillipines Movies</h1>
          <FaChevronLeft
            className="hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer left-0"
            onClick={() => sliderLeft(elementRef.current)}
          />
          <FaChevronRight
            className="hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
            onClick={() => sliderRight(elementRef.current)}
          />
          <div ref={elementRef} className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5 px-3">
            {pmovies.map((item, index) => item.poster_path && <MovieCard key={index} movie={item} />)}
          </div>
          </div>
        </div>
      
    
  );
}
