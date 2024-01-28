import { Button, Select, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { Helmet } from 'react-helmet';
import AdComponent from '../components/Ads';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 10) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'category') {
      const category = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 10) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };
  const pageTitle = 'MovieMaven - Your Ultimate Source for Movies, Series, Anime, Kdrama and Reviews';
  const pageDescription = 'Explore a variety of movies, series, and reviews on MovieMaven. Your go-to source for all things entertainment.';
  const pageKeywords = " movie s,LOW,4,5000000,0.10,1.55, movies of movies,LOW,4,5000000,0.10,1.55, movies and movies,LOW,4,5000000,0.10,1.55, movies for movies,LOW,4,5000000,0.10,1.55, free movies free movies,LOW,25,2740000,0.32,1.94, free movies free movies free movies,LOW,25,2740000,0.32,1.94, free moviesite,LOW,25,2740000,0.32,1.94, free free free movies,LOW,25,2740000,0.32,1.94, starz s,LOW,25,450000,1.03,4.67, movies free,LOW,19,246000,0.30,1.74, movies f,LOW,19,246000,0.30,1.74, full movies free movies,LOW,20,246000,0.17,1.13, free movie sites for free,LOW,16,201000,0.67,2.78, se ries,LOW,0,165000,0.36,1.89, free tv free,MEDIUM,34,60500,0.59,1.95, hollywood movies,LOW,2,49500,0.07,2.28, hollywood movies hollywood,LOW,2,49500,0.07,2.28, movies hollywood movies,LOW,2,49500,0.07,2.28, english movies,LOW,3,40500,1.37,2.81, free movies and,LOW,22,40500,0.48,2.02, movies to for free,LOW,22,40500,0.48,2.02, movies english movies,LOW,3,40500,1.37,2.81, movie free free,LOW,22,40500,0.48,2.02, english movie film,LOW,3,40500,1.37,2.81, english movie english movie,LOW,3,40500,1.37,2.81, english movie english movie english movie,LOW,3,40500,1.37,2.81, movies and series,LOW,4,27100,0.58,3.08, movies on showtimes,LOW,3,27100,2.21,8.58, shows reality,LOW,1,27100,1.80,9.24, movies series,LOW,1,18100,0.86,4.33, download movies download,LOW,24,18100,0.25,3.21, download free movies download,LOW,25,18100,0.33,3, movie s,LOW,4,5000000,0.10,1.55, movies of movies,LOW,4,5000000,0.10,1.55, movies and movies,LOW,4,5000000,0.10,1.55, movies for movies,LOW,4,5000000,0.10,1.55, free movies free movies,LOW,25,2740000,0.32,1.94, free movies free movies free movies,LOW,25,2740000,0.32,1.94, free moviesite,LOW,25,2740000,0.32,1.94, free free free movies,LOW,25,2740000,0.32,1.94, starz s,LOW,25,450000,1.03,4.67, movies free,LOW,19,246000,0.30,1.74, movies f,LOW,19,246000,0.30,1.74, full movies free movies,LOW,20,246000,0.17,1.13, free movie sites for free,LOW,16,201000,0.67,2.78, se ries,LOW,0,165000,0.36,1.89, free tv free,MEDIUM,34,60500,0.59,1.95, hollywood movies,LOW,2,49500,0.07,2.28, hollywood movies hollywood,LOW,2,49500,0.07,2.28, movies hollywood movies,LOW,2,49500,0.07,2.28, english movies,LOW,3,40500,1.37,2.81, free movies and,LOW,22,40500,0.48,2.02, movies to for free,LOW,22,40500,0.48,2.02, movies english movies,LOW,3,40500,1.37,2.81, movie free free,LOW,22,40500,0.48,2.02, english movie film,LOW,3,40500,1.37,2.81, english movie english movie,LOW,3,40500,1.37,2.81, english movie english movie english movie,LOW,3,40500,1.37,2.81, movies and series,LOW,4,27100,0.58,3.08, movies on showtimes,LOW,3,27100,2.21,8.58, shows reality,LOW,1,27100,1.80,9.24, movies series,LOW,1,18100,0.86,4.33, download movies download,LOW,24,18100,0.25,3.21, download free movies download,LOW,25,18100,0.33,3,download free movies download,LOW,25,18100,0.33,3.88, download movies download,LOW,24,18100,0.25,3.21, download free,LOW,24,18100,0.25,3.21, watch movies online,LOW,25,14800,0.69,5.05, movies watch movies online,LOW,25,14800,0.69,5.05, watch movies online watch,LOW,25,14800,0.69,5.05, watch movies online watch movies,LOW,25,14800,0.69,5.05, tv series,LOW,0,14800,1.08,8.91, tv series tv series tv,LOW,0,14800,1.08,8.91, tv series tv,LOW,0,14800,1.08,8.91, tv series series tv series,LOW,0,14800,1.08,8.91, tv series series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv,LOW,0,14800,1.08,8.91, tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series tv series tv,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series tv series tv series tv,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series tv series tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series tv series tv series tv series tv,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series tv series tv series tv series tv series,LOW,0,14800,1.08,8.91, tv series tv series tv series tv series tv series tv series tv series tv series tv series, tv ,series tv,";
  const canonicalUrl = 'https://www.moviemaven.xyz/';
  const ogImageUrl = 'https://www.moviemaven.xyz/moviemaven.webp';
  const movieSchema = {
    '@context': 'http://schema.org',
    '@type': 'Movie',
    'name': 'Movie Maven',
    'description': "Explore an extensive selection of entertainment options like movies, TV series, kdramas and animes. Also find insightful movie reviews that shed light on the world of cinema. Immerse yourself in a world where staying updated with current events is effortless while indulging in engaging content that's impossible to ignore - all handpicked for you at one destination. Brace yourself for unforgettable immersive experiences! ",
    'image': 'https://www.moviemaven.xyz/moviemaven.webp',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.5',
      'reviewCount': '100'
    }
  }
  return (
    <React.Fragment>
        <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <script type="application/ld+json">{JSON.stringify(movieSchema)}</script>
        </Helmet>
        {/* <AdComponent/> */}
    <div className='flex flex-col md:flex-row'>
      <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <div className='flex   items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              Search Term:
            </label>
            <TextInput
              placeholder='Search...'
              id='searchTerm'
              type='text'
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
              <option value='desc'>Latest</option>
              <option value='asc'>Oldest</option>
            </Select>
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id='category'
            >
              <option value='uncategorized'>Uncategorized</option>
              <option value='movies'>Movies</option>
              <option value='series'>Series</option>
              <option value='anime'>Anime</option>
              <option value='kdrama'>Kdrama</option>
              <option value='reviews'>Reviews</option>
            </Select>
          </div>
          <Button type='submit' outline gradientDuoTone='purpleToBlue'>
            Apply Filters
          </Button>
        </form>
      </div>
      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 '>
          Posts results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && posts.length === 0 && (
            <p className='text-xl text-gray-500'>No posts found.</p>
          )}
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className='text-teal-500 text-lg hover:underline p-7 w-full'
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}