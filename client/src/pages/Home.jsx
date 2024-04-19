import React, { useEffect, useState } from 'react'; 
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import SwiperCard from "../components/SwiperCard";
import PostCard from "../components/PostCard";
import { Button } from "flowbite-react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [kdramas, setKdramas] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    const fetchPostsByCategory = async (category) => {
      try {
        const res = await fetch(
          `/api/post/gethomepageposts?category=${category}&limit=12`
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

  return (
    <div>
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
      <Swiper navigation autoplay={{ delay: 2000 }}>
        {reviews && reviews.length > 0 && (
          <div className="flex flex-col gap-6">
            {reviews.map((post) => (
              <SwiperSlide className="flex flex-wrap justify-center gap-4" key={post._id}>
                <SwiperCard post={post} />
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>

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
                show more animes
              </Link>
            </Button>
          </div>
        )} */}
      </div>
    </div>
  );
}
