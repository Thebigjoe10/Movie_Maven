/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import { getMovieByGenreId } from "../Services/GlobalApi"
import MovieCard from './MovieCard';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MovieList(props) {
    const { genreId } = props;
    const [movieList , setMovieList]=useState([])
    const elementRef = useRef(null);
    const screenWidth = window.innerWidth;
    useEffect(() => {
      const getMovies = async () => {
        try {
          const response = await getMovieByGenreId(genreId);
          console.log(response.data.results);
          setMovieList(response.data.results)
        } catch (error) {
          console.error('Error fetching movies by genre:', error);
        }
      };
  
      getMovies();
    }, [genreId]);
    const sliderRight = (element) => {
      element.scrollLeft += screenWidth - 110;
    };
  
    const sliderLeft = (element) => {
      element.scrollLeft -= screenWidth - 110;
    };
  
    return<div>
      <FaChevronLeft
        className=" hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer left-0"
        onClick={() => sliderLeft(elementRef.current)}
      />
    <FaChevronRight
        className=" hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5 px-3'>
        {movieList.map((item, index)=>(
            <MovieCard
            key={index}
            movie={item}
            />
        ))}
    </div>
    </div>
  }
