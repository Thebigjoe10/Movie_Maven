/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import GenreMovieList from "../Constant/GenreMovieList";
export default function Home() {
return(
  <div>
    {
      GenreMovieList.genre.map((item, index)=> index<=4&&
      <div
      key={index}>
          <h1>{item.name}
            </h1>
      </div>
      )
    }
  </div>
)
}
