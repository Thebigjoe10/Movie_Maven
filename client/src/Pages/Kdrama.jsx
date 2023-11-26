import React from 'react';
import Slider from '../Components/Slider';
import KoreanGenre from '../Constant/KDramaGenre';
import KdramaList from '../Components/KDramaList';

export default function Kdrama() {
  return (
    <div>
      <Slider contentType="kdrama" />
      {KoreanGenre.koreanGenres.map((item, index) => (
        <div key={index} className="p-8 px-8 md:px-16">
          <h1 className="text-[20px] font-bold">{item.name}</h1>
          <KdramaList KoreanGenre={item.id} />
        </div>
      ))}
    </div>
  );
}
