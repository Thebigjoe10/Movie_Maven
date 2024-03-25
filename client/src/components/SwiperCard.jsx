import React from 'react'
import { Link } from 'react-router-dom'

export default function SwiperCard({post}) {
  return (
    <div className='group relative border border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all p-0 m-4'>
    <Link to={`/post/${post.slug}`}>
      <div className="aspect-w-16 aspect-h-20">
        <img
          src={post.image}
          alt='post cover'
          className='h-full w-full object-cover transition-all duration-300 z-20'
        />
      </div>
    </Link>
    <div className='p-3 flex flex-col gap-2'>
      <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
      <span className='italic text-sm'>{post.category}</span>
        <span className='italic text-sm'>{post.genre}</span>
      <Link
          to={`/post/${post.slug}`}
          className='z-10 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Show More
        </Link>
    </div>
  </div>
  )
}
