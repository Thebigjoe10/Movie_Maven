import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="aspect-w-16 aspect-h-9">
    <div className='group relative w-1/3 md:w-1/3 lg:w-1/4 border border-teal-500 hover:border-2 md:h-auto overflow-hidden rounded-lg transition-all'>
      <Link to={`/post/${post.slug}`}>
          <img
            src={post.image}
            alt='post cover'
            className='h-full w-full object-cover transition-all duration-300 z-20'
          />
        <div className='p-3 flex flex-col gap-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 opacity-0 group-hover:opacity-100'>
          <p className='text-lg font-semibold line-clamp-2 text-white'>{post.title}</p>
          <span className='italic text-sm text-white'>{post.category}</span>
          <span className='italic text-sm text-white'>{post.genre}</span>
          <Link
            to={`/post/${post.slug}`}
            className='z-10 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
          >
            Show More
          </Link>
        </div>
      </Link>
    </div>
      </div>
  );
}
