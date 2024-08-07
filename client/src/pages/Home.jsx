import React, { useEffect, useState } from 'react'; 
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperCard from "../components/SwiperCard";
import PostCard from "../components/PostCard";
import { Button } from "flowbite-react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [kdramas, setKdramas] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    const fetchPostsByCategory = async (category) => {
      try {
        const res = await fetch(`/api/post/gethomepageposts?category=${category}&limit=12`);
        const data = await res.json();

        switch (category) {
          case "movies":
            setMovies(data.posts || []);
            break;
          case "series":
            setSeries(data.posts || []);
            break;
          case "kdrama":
            setKdramas(data.posts || []);
            break;
          case "anime":
            setAnimes(data.posts || []);
            break;
          case "reviews":
            setReviews(data.posts || []);
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

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const res = await fetch(`/api/post/gethomepageposts?featured=yes&limit=12`);
        const data = await res.json();
        setFeaturedPosts(data.posts || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeaturedPosts();
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="flex flex-col gap-6 p-16 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to Movie Maven
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of movies, series, animes and reviews on
          topics such as movies, stay updated with reviews, and binge-watch
          series and animes. All in one place. Enjoy! 🎬📺
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">
          View all posts
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-center py-4">What To Watch?</h2> 
      <Slider autoplay={true} autoplaySpeed={3000} style={{ width: "80%", margin: "0 auto" }}>
        {reviews.length > 0 ? reviews.map((post) => (
          <div className="flex flex-col gap-6" key={post._id}>
            <SwiperCard post={post} />
          </div>
        )) : <p className="text-center">No reviews available</p>}
      </Slider>

      <h2 className="text-2xl font-semibold text-center py-4">Featured Posts</h2>
      <Slider autoplay={true} autoplaySpeed={3000} style={{ width: "80%", margin: "0 auto" }}>
        {featuredPosts.length > 0 ? featuredPosts.map((post) => (
          <div className="flex flex-col gap-6" key={post._id}>
            <SwiperCard post={post} />
          </div>
        )) : <p className="text-center">No featured posts available</p>}
      </Slider>


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
                Show more movies
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
                Show more series
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
                Show more Kdramas
              </Link>
            </Button>
          </div>
        )}

        {/* Anime Section */}
        {/* {animes && animes.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              New Anime Uploads
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {animes.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Button type="button" gradientDuoTone="purpleToBlue" size="sm">
              <Link
                to={"/search?category=anime"}
                className="text-lg text-white hover:underline text-center">
                Show more animes
              </Link>
            </Button>
          </div>
        )} */}
      </div>
    </div>
  );
}
