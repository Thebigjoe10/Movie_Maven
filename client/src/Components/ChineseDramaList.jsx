/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { getChineseDramaGenre } from '../Services/GlobalApi';
import React, { useEffect, useRef, useState } from 'react';
import MovieCard from './MovieCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ChineseDramaList({ ChineseGenre }) {
  const [chineseDramaList, setChineseDramaList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const elementRef = useRef(null);
  const screenWidth = window.innerWidth;

  const getChineseDramas = async (page) => {
    try {
      const response = await getChineseDramaGenre(ChineseGenre, page);
      console.log(response.data.results);
      setChineseDramaList((prevDramas) => [...prevDramas, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching Chinese dramas by genre:', error);
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
    getChineseDramas(currentPage + 1);
  };

  useEffect(() => {
    getChineseDramas(currentPage);
  }, [ChineseGenre, currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
        // Fetch more Chinese dramas when scrolled to the end
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
  }, [ChineseGenre, currentPage]);

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
        {chineseDramaList.map((item, index) => (
          item.poster_path && (
            <MovieCard key={index} movie={item} />
          )
        ))}
      </div>
    </div>
  );
}
