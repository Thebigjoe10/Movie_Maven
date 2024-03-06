import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Helmet } from "react-helmet";
import { Button } from "flowbite-react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [kdramas, setKdramas] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [reviews, setReviews] = useState([]);
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
    const fetchPostsByCategory = async (category) => {
      try {
        const res = await fetch(
          `/api/post/getposts?category=${category}&limit=12`
        );
        const data = await res.json();

        switch (category) {
          case "movies":
            setMovies(data.posts);
            break;
          case "series":
            setSeries(data.posts);
            break;
          case "kdrama":
            setKdramas(data.posts);
            break;
          case "anime":
            setAnimes(data.posts);
            break;
          case "reviews":
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
    fetchPostsByCategory("movies");
    fetchPostsByCategory("series");
    fetchPostsByCategory("kdrama");
    fetchPostsByCategory("anime");
    fetchPostsByCategory("reviews");
  }, []);

  const pageTitle =
    "MovieMaven - Your Ultimate Source for Movies, Series, Anime, Kdrama and Reviews";
  const pageDescription =
    "Explore a variety of movies, series, and reviews on MovieMaven. Your go-to source for all things entertainment.";
  const pageKeywords = "movies, series, anime, kdrama, reviews, entertainment"
  const canonicalUrl = "https://www.moviemaven.xyz/";
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
    <div>
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

      <div className="flex flex-col gap-6 p-16 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to Movie Maven
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of movies, series, animes and reviews on topics such
          as movies, stay updated with reviews, and binge-watch series and animes. All in one
          place. Enjoy! 🎬📺
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="p-3 flex flex-col gap-8 ">
        {/* Movies Section */}
        {movies && movies.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              New Movies Upload
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {movies.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Button type="button" gradientDuoTone="purpleToBlue" size="sm">
              <Link
                to={"/search?category=movies"}
                className="text-lg text-white hover:underline text-center">
                show more movies
              </Link>
            </Button>
          </div>
        )}

        {/* Series Section */}
        {series && series.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              New Series Upload
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {series.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Button type="button" gradientDuoTone="purpleToBlue" size="sm">
              <Link
                to={"/search?category=series"}
                className="text-lg text-white hover:underline text-center">
                show more series
              </Link>
            </Button>
          </div>
        )}

        {/* Kdrama Section */}
        {kdramas && kdramas.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              New Kdramas Upload
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {kdramas.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Button type="button" gradientDuoTone="purpleToBlue" size="sm">
              <Link
                to={"/search?category=kdrama"}
                className="text-lg text-white hover:underline text-center">
                show more Kdramas
              </Link>
            </Button>
          </div>
        )}

        {/* Anime Section
        {animes && animes.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">New Anime Uploads</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {animes.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Button type="button" gradientDuoTone="purpleToBlue" size="sm">
              <Link
                to={"/search?category=anime"}
                className="text-lg text-white hover:underline text-center">
                show more Anime
              </Link>
            </Button>
          </div>
        )} */}

        {/* News Section
        {reviews && reviews.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center"> Recent Reviews</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {reviews.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Button type="button" gradientDuoTone="purpleToBlue" size="sm">
              <Link
                to={"/search?category=reviews"}
                className="text-lg text-white hover:underline text-center">
                show more Reviews
              </Link>
            </Button>
          </div>
        )} */}
      </div>
    </div>
  );
}
