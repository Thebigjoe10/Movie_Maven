/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import GenreMovieList from "../Constant/GenreMovieList";
import MovieList from "../Components/MovieList";
import Slider from "../Components/Slider";
import TvshowList from "../Components/TvshowList";
import MovieTvshowList from "../Constant/MovieTvshowList";
export default function Home() {
return(
  <div>
    <Slider isTvSeries={false} />
    {
      GenreMovieList.genre.map((item, index)=> index<=4&&
      <div
      key={index} className= "p-8 px-8 md:px-16">
          <h1 className="text-[20px] font-bold text-white">{item.name}
            </h1>
            <MovieList genreId={item.id} />
            
      </div>
      )
    }
    <h1 className="text-[20px] font-bold text-white p-8 px-8 md:px-16">Tv Series</h1>
    {
      MovieTvshowList.genres.map((item, index)=> index<=5&&
      <div
      key={index}
      className="p-8 px-8 md:px-16"
      >
        <h1 className="text-[20px] font-bold text-white">{item.name}</h1>
        <TvshowList genresId={item.id}/>
      </div>
      )
    }
  </div>
)
}
