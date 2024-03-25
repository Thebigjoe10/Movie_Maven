import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Spinner } from "flowbite-react";
import PostCard from "../components/PostCard";
import CommentSection from "../components/CommentSection";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [recommendedPosts, setRecommendedPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();

        if (!res.ok || data.posts.length === 0) {
          setError(true);
          setLoading(false);
          return;
        }

        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        if (!post || (!post.category && !post.genre)) {
          return;
        }

        let apiUrl = `/api/post/getposts?limit=4&category=${post.category}&genre=${post.genre}`;

        const res = await fetch(apiUrl);
        const data = await res.json();

        if (res.ok) {
          // Exclude the current post from related posts
          const filteredRelatedPosts = data.posts.filter(
            (relatedPost) => relatedPost._id !== post._id
          );
          setRelatedPosts(filteredRelatedPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchRelatedPosts();
  }, [post]);

  
  useEffect(() => {
  const fetchRecommendedPosts = async () => {
  try {
    if (!post || !post.category || !post.genre) {
      return;
    }

    const res = await fetch(
      `/api/post/getposts?category=${post.category}&limit=5`
    );
    const data = await res.json();

    if (res.ok) {
      // Exclude the current post and shuffle the posts with different genre
      const filteredRecommendedPosts = data.posts
        .filter((recommendedPost) => recommendedPost._id !== post._id && recommendedPost.genre !== post.genre)
        .sort(() => Math.random() - 0.5);

      setRecommendedPosts(filteredRecommendedPosts);
    }
  } catch (error) {
    console.log(error.message);
  }
};

fetchRecommendedPosts();
  }, [post]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Error loading post. Please try again later.</p>
      </div>
    );

  return (
    <React.Fragment>
      <Helmet>
        {post && (
          <>
        <meta property="og:image" content={post && post.image} />
        <meta
          property="og:url"
          content={`https://moviemaven.xyz/post/${postSlug}`}
        />
        <title>{post && post.title}</title>
        <meta property="og:title" content={post && post.title} />
        <meta
          property="og:description"
          content={post && (post.content.length / 1000).toFixed(0)}
        />
            </>
        )}
      </Helmet>
      <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
        <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
          {post && post.title}
        </h1>
        <Link
          to={`/search?category=${post && post.category}`}
          className="self-center mt-5"
        >
          <Button color="gray" pill size="xs">
            {post && post.category}
          </Button>
        </Link>
        <Link
          to={`/search?genre=${post && post.genre}`}
          className="self-center mt-5"
        >
          {post && post.genre && (
            <Button color="gray" pill size="xs">
              {post.genre}
            </Button>
          )}
        </Link>
        <img
          src={post && post.image}
          alt={post && post.title}
          className="mt-10 p-3 h-full w-full object-cover"
        />
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
          <span className="italic">
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div
          className="p-3 max-w-2xl mx-auto w-full post-content"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>

        {/* Related Posts Section */}
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">Related Posts</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost._id} post={relatedPost} />
            ))}
          </div>
        </div>

        {/* Recommended Posts Section */}
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">Recommended Posts</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {recommendedPosts.map((recommendedPost) => (
              <PostCard key={recommendedPost._id} post={recommendedPost} />
            ))}
          </div>
        </div>

        {/* Comment Section */}
        <CommentSection postId={post._id} />
      </main>
    </React.Fragment>
  );
}

