import { Button, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

// Custom hook for form handling
function useForm(initialState) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return { formData, handleChange };
}

export default function Search() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { formData, handleChange } = useForm({
    searchTerm: "",
    sort: "desc",
    category: "",
    genre: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const searchQuery = new URLSearchParams(location.search).toString();
        const res = await fetch(`/api/post/getposts?${searchQuery}`);
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        setShowMore(data.posts.length === 12);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
        // Handle error gracefully, e.g., display error message to the user
      }
    };

    fetchPosts();
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) urlParams.set(key, value);
    });
    navigate(`/search?${urlParams.toString()}`);
  };

  const handleShowMore = async () => {
    try {
      const numberOfPosts = posts.length;
      const startIndex = numberOfPosts;
      const urlParams = new URLSearchParams(location.search);
      urlParams.set("startIndex", startIndex);
      const res = await fetch(`/api/post/getposts?${urlParams.toString()}`);
      if (!res.ok) {
        throw new Error("Failed to fetch more posts");
      }
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      setShowMore(data.posts.length === 12);
    } catch (error) {
      console.error("Error fetching more posts:", error);
      // Handle error gracefully, e.g., display error message to the user
    }
  };

 
  return (
    <React.Fragment>
      
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
                value={formData.searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Sort:</label>
              <Select
                onChange={handleChange}
                value={formData.sort}
                id="sort">
                <option value="desc">Latest</option>
                <option value="asc">Oldest</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Category:</label>
              <Select
                onChange={handleChange}
                value={formData.category}
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
                value={formData.genre}
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
              <Button
                type="button"
                gradientDuoTone="purpleToBlue"
                size="sm"
                className="text-lg w-full"
                onClick={handleShowMore}
              >
                Show More
              </Button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
} 
