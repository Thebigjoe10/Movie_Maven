import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./components/ThemeProvider.jsx";
import { Helmet } from "react-helmet";

const Main = () => {
  const [Schemamovies, setSchemaMovies] = useState([]);
  const [Schemaseries, setSchemaSeries] = useState([]);

  useEffect(() => {
    // Fetch movies and series
    const fetchPostsByCategory = async (category, setPosts) => {
      try {
        const res = await fetch(
          `/api/post/getposts?category=${category}&limit=3`
        );
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

  const pageTitle =
    "MovieMaven - Your Ultimate Source for Movies, Series, Anime, Kdrama and Reviews";
  const pageDescription =
    "Explore a variety of movies, series, and reviews on MovieMaven. Your go-to source for all things entertainment.";
  const pageKeywords = "movies, series, anime, kdrama, reviews, entertainment";
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

  useEffect(() => {
    // Dynamically update Open Graph meta tags when Schemamovies or Schemaseries change
    const updateOpenGraphTags = () => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify([
        ...generateMediaSchemaArray(Schemamovies),
        ...generateMediaSchemaArray(Schemaseries),
      ]);
      document.getElementById("json-ld-script")?.replaceWith(script);
    };

    updateOpenGraphTags();
  }, [Schemamovies, Schemaseries]);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/client/public/sw.js");
    });
  }

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
        {/* Placeholder for JSON-LD script */}
        <script
          id="json-ld-script"
          type="application/ld+json"
        >{`[]`}</script>
      </Helmet>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Provider>
      </PersistGate>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
