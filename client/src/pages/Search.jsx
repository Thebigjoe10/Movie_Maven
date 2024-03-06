import { Button, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import { Helmet } from "react-helmet";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: '',
    genre: '',
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const [Schemamovies, setSchemaMovies] = useState([]);
  const [Schemaseries, setSchemaSeries] = useState([]);
  
  useEffect(() => {
    // Fetch movies and series
    const fetchPostsByCategory = async (category, setPosts) => {
      try {
        const res = await fetch(`/api/post/getposts?category=${category}&limit=3`);
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
      }
    };
  
    // Fetch movies and series when the component mounts
    fetchPostsByCategory("Schemamovies", setSchemaMovies);
    fetchPostsByCategory("Schemaseries", setSchemaSeries);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    const genreFromUrl = urlParams.get('genre');

    if (searchTermFromUrl || sortFromUrl || categoryFromUrl || genreFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
        genre: genreFromUrl,
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

      const data = await res.json();
      setPosts(data.posts);
      setLoading(false);

      setShowMore(data.posts.length === 12);
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
      const category = e.target.value;
      setSidebarData({ ...sidebarData, category: category });
    }
    if (e.target.id === 'genre') {
      const genre = e.target.value;
      setSidebarData({ ...sidebarData, genre: genre });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    urlParams.set('genre', sidebarData.genre);
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
      console.error('Error fetching more posts:', res.status, res.statusText);
      return;
    }

    const data = await res.json();
    setPosts([...posts, ...data.posts]);
    setShowMore(data.posts.length === 12);
  };

  useEffect(() => {
    const defaultImageUrl = "https://www.moviemaven.xyz/moviemaven.webp";
    const ogImageUrl =
      posts.length > 0 ? posts[0].image || defaultImageUrl : defaultImageUrl;
    document
      .querySelector('meta[property="og:image"]')
      .setAttribute("content", ogImageUrl);
  }, [posts]);

  const pageTitle =
    "MovieMaven - Your Ultimate Source for Movies, Series, Anime, Kdrama and Reviews";
  const pageDescription =
    "Explore a variety of movies, series, and reviews on MovieMaven. Your go-to source for all things entertainment.";
  const pageKeywords =  "movies, series, anime, kdrama, reviews, entertainment";
  const canonicalUrl = "https://www.moviemaven.xyz/search";
  const ogImageUrl = "https://www.moviemaven.xyz/moviemaven.webp";
  const generateMediaSchemaArray = (posts) => {
    return posts.map((post) => {
      return {
        "@context": "http://schema.org",
        "@type": "Movie",
        name: post.title,
        description: post.content,
        image: post.image, 
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          reviewCount: "100",
        },
      };
    });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:type" content="website" />
<meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <script type="application/ld+json">
  {JSON.stringify([
    ...generateMediaSchemaArray(Schemamovies),
    ...generateMediaSchemaArray(Schemaseries),
  ])}
</script>
      </Helmet>
      <div className="flex flex-col md:flex-row">
        <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <label className="whitespace-nowrap font-semibold">
                Search Term:
              </label>
              <TextInput
                placeholder="Search..."
                id="searchTerm"
                type="text"
                value={sidebarData.searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Sort:</label>
              <Select
                onChange={handleChange}
                value={sidebarData.sort}
                id="sort">
                <option value="desc">Latest</option>
                <option value="asc">Oldest</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Category:</label>
              <Select
                onChange={handleChange}
                value={sidebarData.category}
                id="category">
                <option value=""></option>
                <option value="movies">Movies</option>
                <option value="series">Series</option>
                <option value="anime">Anime</option>
                <option value="kdrama">Kdrama</option>
                <option value="reviews">Reviews</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Genre:</label>
              <Select
                onChange={handleChange}
                value={sidebarData.genre}
                id="genre">
                <option value=""></option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="horror">Horror</option>
                <option value="thriller">Thriller</option>
                <option value="sci-fi">Science Fiction</option>
                <option value="fantasy">Fantasy</option>
                <option value="animation">Animation</option>
                <option value="adventure">Adventure</option>
                <option value="mystery">Mystery</option>
                <option value="crime">Crime</option>
                <option value="documentary">Documentary</option>
                <option value="family">Family</option>
                <option value="musical">Musical</option>
                <option value="biography">Biography</option>
                <option value="history">History</option>
                <option value="war">War</option>
                <option value="sport">Sport</option>
                <option value="western">Western</option>
                <option value="asian-movie">Asian-movie</option>
                <option value="bollywood-movie">Bollywood</option>
                <option value="wwe">WWE</option>
              </Select>
            </div>
            <Button type="submit" outline gradientDuoTone="purpleToBlue">
              Apply Filters
            </Button>
          </form>
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
            Posts results:
          </h1>
          <div className="p-7 flex flex-wrap justify-center gap-4">
            {!loading && posts && posts.length === 0 && (
              <p className="text-xl text-gray-500">No posts found.</p>
            )}

            {loading && <p className="text-xl text-gray-500">Loading...</p>}
            {!loading &&
              posts &&
              posts.map((post) => <PostCard key={post._id} post={post} />)}
            {showMore && (
              <button
                onClick={handleShowMore}
                className="text-teal-500 text-lg hover:underline p-7 w-full">
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
