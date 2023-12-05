/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { fetchTrendingVideos, fetchTrendingTvShows, getChineseDrama, getKoreanDrama, getInternationalMovies, getBollywoodMovies, getPhillipineMovies, getNigeriaMovies, getSouthafricaMovies } from '../Services/GlobalApi'; // Replace with your actual API functions
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ImageSkeleton from './ImageSkeleton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieList, selectMovieList } from '../features/movie/movieSlice';


export default function Slider({ contentType }) {
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovieList);
  const screenWidth = window.innerWidth;
  const [, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (contentType === 'tvShows') {
          response = await fetchTrendingTvShows();
        } else if (contentType === 'chineseDrama') {
          response = await getChineseDrama();
        }
        else if(contentType=== "kdrama"){
          response= await getKoreanDrama()
        }
        else if(contentType==="international"){
          response= await getInternationalMovies()
        }
        else if(contentType==="bollywood"){
          response= await getBollywoodMovies()
        }
        else if(contentType==="phillipine"){
          response= await getPhillipineMovies()
        }
        else if (contentType==="nollywood"){
          response= await getNigeriaMovies()
        }
        else if (contentType==="southafrica"){
          response= await getSouthafricaMovies()
        }
        else {
          response = await fetchTrendingVideos();
        }

        console.log(response.data.results);
        setMedia(response.data.results);
        setIsLoading(false);
        dispatch(setMovieList(response.data.results));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [contentType, dispatch]);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

const placeholderCount = 20;

return (
  <div>
    <FaChevronLeft
      className="hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
      onClick={() => sliderLeft(elementRef.current)}
    />
    <FaChevronRight
      className="hidden md:block text-less-blue text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
      onClick={() => sliderRight(elementRef.current)}
    />
    <h1 className="p-2 px-8 md:px-16 text-xl font-bold text-white">
      {contentType === 'tvShows' ? 'Trending TV Series' : 'Trending Movies'}
    </h1>
    <div className="flex gap-4 overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth" ref={elementRef}>
      {isLoading ? (
        Array.from({ length: placeholderCount }).map((_, index) => (
          <div
            key={index}
          >
            <ImageSkeleton />
          </div>
        ))
      ) : (
        movieList.map((item, index) => (
          <Link to={`/details/${item.id}`} key={index}
          >
          <img
            src={import.meta.env.VITE_MOVIE_BASE_IMG + item.backdrop_path}
            className='md:min-w-[600px] min-w-[200px] h-[310px] object-left-top mr-5 rounded-md hover:border-[4px] border-less-blue transition-all duration-100 ease-in'
            alt={contentType === 'tvShows' ? 'TV Show' : 'Movie'}
            onLoad={() => setImageLoaded(true)}
            style={imageLoaded ? {} : { display: 'none' }}
          />
        </Link>
        ))
      )}
    </div>
  </div>
);


}
