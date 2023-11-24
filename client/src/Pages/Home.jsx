/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import GenreMovieList from "../Constant/GenreMovieList";
import MovieList from "../Components/MovieList";
export default function Home() {
return(
  <div>
    {
      GenreMovieList.genre.map((item, index)=> index<=4&&
      <div
      key={index} className= "p-8 px-8 md:px-16">
          <h1 className="text-[20px] font-bold">{item.name}
            </h1>
            <MovieList genreId={item.id} />
      </div>
      )
    }
  </div>
)
}
