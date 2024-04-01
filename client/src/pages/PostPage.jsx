import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

        const res = await fetch("/api/post/getposts");
        const data = await res.json();

        if (res.ok) {
          const filteredRelatedPosts = data.posts
            // Exclude the current post
            .filter(relatedPost => relatedPost._id !== post._id)
            // Filter related posts by category and genre
            .filter(relatedPost => relatedPost.category === post.category && relatedPost.genre === post.genre)
            // Filter related posts by title and content
            .filter(relatedPost => relatedPost.title.includes(post.title) || relatedPost.content.includes(post.content))
            // Sort related posts from old to new
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

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
        if (!post || !post.category) {
          return;
        }

        const res = await fetch(
          `/api/post/getposts?category=${post.category}&limit=5`
        );
        const data = await res.json();

        if (res.ok) {
          setRecommendedPosts(data.posts);
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
            <meta charSet="utf-8" />
            <title>{post.title}</title>
            <meta name="description" content={post.content} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://www.moviemaven.xyz/post/getposts?slug=${postSlug}`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.content} />
            <meta property="og:image" content={post.image} />
            <meta property="og:url" content={`https://www.moviemaven.xyz/post/getposts?slug=${postSlug}`} />
            <meta property="og:site_name" content="MovieMaven" />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@MovieMaven.xyz_" />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.content} />
            <meta name="twitter:image" content={post.image} />
            <meta name="twitter:url" content={`https://www.moviemaven.xyz/post/getposts?slug=${postSlug}`} />
          </>
        )}
      </Helmet>

      <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
        <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
          {post.title}
        </h1>
        <Link
          to={`/search?category=${post.category}`}
          className="self-center mt-5"
        >
          <Button color="gray" pill size="xs">
            {post.category}
          </Button>
        </Link>
        <Link
          to={`/search?genre=${post.genre}`}
          className="self-center mt-5"
        >
          {post.genre && (
            <Button color="gray" pill size="xs">
              {post.genre}
            </Button>
          )}
        </Link>
        <img
          src={post.image}
          alt={post.title}
          className="mt-10 p-3 h-full w-full object-cover"
        />
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span className="italic">
            {post.content && (post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div
          className="p-3 max-w-2xl mx-auto w-full post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">Related {post.genre}</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {relatedPosts.map(relatedPost => (
              <PostCard key={relatedPost._id} post={relatedPost} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">YOU MIGHT ALSO LIKE</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {recommendedPosts.map(recommendedPost => (
              <PostCard key={recommendedPost._id} post={recommendedPost} />
            ))}
          </div>
        </div>

        <CommentSection postId={post._id} />
      </main>
    </React.Fragment>
  );
}
