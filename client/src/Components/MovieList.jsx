/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { getMovieByGenreId } from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const elementRef = useRef(null);
  const screenWidth = window.innerWidth;

  const getMovies = async (page) => {
    try {
      const response = await getMovieByGenreId(genreId, page);
      console.log(response.data.results);
      setMovieList((prevMovies) => [...prevMovies, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
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
    getMovies(currentPage + 1);
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [genreId, currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
        // Fetch more movies when scrolled to the end
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
  }, [genreId, currentPage]);
  return (
    <div>
      <FaChevronLeft
        className="hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer left-0"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <FaChevronRight
        className="hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5 px-3'>
        {movieList.map((item, index) => (
          item.poster_path && (
            <MovieCard key={index} movie={item} />
          )
        ))}
      </div>
    </div>
  );
}
