import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [kdramas, setKdramas] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchPostsByCategory = async (category) => {
      try {
        const res = await fetch(`/api/post/getposts?category=${category}&limit=3`);
        const data = await res.json();

        switch (category) {
          case 'movies':
            setMovies(data.posts);
            break;
          case 'series':
            setSeries(data.posts);
            break;
          case 'kdrama':
            setKdramas(data.posts);
            break;
          case 'anime':
            setAnimes(data.posts);
            break;
          case 'reviews':
            setReviews(data.posts);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch posts for each category
    fetchPostsByCategory('movies');
    fetchPostsByCategory('series');
    fetchPostsByCategory('kdrama');
    fetchPostsByCategory('anime');
    fetchPostsByCategory('reviews');
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to Movie Maven</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of movies, series and news on topics such as
          movies, stay updated with news, and binge-watch series. All in one place. Enjoy! 🎬📺
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        {/* <CallToAction /> */}
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {/* Movies Section */}
        {movies && movies.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Movies</h2>
            <div className='flex flex-wrap gap-4'>
              {movies.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search?category=movies'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              show all movies
            </Link>
          </div>
        )}

        {/* Series Section */}
        {series && series.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Series</h2>
            <div className='flex flex-wrap gap-4'>
              {series.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search?category=series'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              show all series
            </Link>
          </div>
        )}

        {/* Kdrama Section */}
        {kdramas && kdramas.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Kdramas</h2>
            <div className='flex flex-wrap gap-4'>
              {kdramas.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search?category=kdrama'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              show all Kdramas
            </Link>
          </div>
        )}

        {/* Anime Section */}
        {animes && animes.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Anime</h2>
            <div className='flex flex-wrap gap-4'>
              {animes.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search?category=anime'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              show all Anime
            </Link>
          </div>
        )}

        {/* News Section */}
        {reviews && reviews.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Reviews</h2>
            <div className='flex flex-wrap gap-4'>
              {reviews.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search?category=reviews'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              show all Reviews
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}