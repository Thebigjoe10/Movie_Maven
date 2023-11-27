import React from 'react'
import Slider from '../../../Components/Slider'
import BollywoodGenre from '../../../Constant/BollywoodGenre'
import BollywoodList from '../../../Components/BollywoodList'

export default function Bollywood() {
  return (
    <div>
    <Slider contentType="bollywood"/>
    {BollywoodGenre.bollywoodGenres.map((item, index)=>
    <div
    key={index}
    className='p-8 px-8 md:px-16'
    >
      <h1 className="text-[20px] font-bold">{item.name}</h1>
      <BollywoodList BollywoodGenre={item.id}/>
    </div>
    )}
    </div>
  )
}
