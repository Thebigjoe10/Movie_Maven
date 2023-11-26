import React from 'react'
import MovieTvshowList from '../Constant/MovieTvshowList'
import TvshowList from '../Components/TvshowList'
import Slider from '../Components/Slider'

export default function Tv_Series() {
  return (
    <div>
       <Slider contentType="tvShows" />

    {
      MovieTvshowList.genres.map((item, index)=>
      <div key={index} className= "p-8 px-8 md:px-16">
      <h1 className="text-[20px] font-bold">{item.name}
            </h1>
            <TvshowList genresId={item.id}/>
      </div>)
      
    }
    </div>
  )
}
