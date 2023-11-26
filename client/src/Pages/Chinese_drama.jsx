import React from 'react'
import Slider from '../Components/Slider'
import ChineseGenre from '../Constant/ChineseGenre'
import ChineseDramaList from '../Components/ChineseDramaList'

export default function Chinese_drama() {
  return (
    <div>
         <Slider contentType="chineseDrama" />
    {
      ChineseGenre.chineseGenres.map((item, index)=>
      <div key={index} className= "p-8 px-8 md:px-16">
      <h1 className="text-[20px] font-bold">{item.name}
            </h1>
            <ChineseDramaList ChineseGenre={item.id}/>
      </div>)
      
    }
    </div>
  )
}
