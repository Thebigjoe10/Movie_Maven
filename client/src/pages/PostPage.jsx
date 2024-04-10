import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"
import { Button, Spinner } from "flowbite-react";
import PostCard from "../components/PostCard";
import CommentSection from "../components/CommentSection";

const PostPage = () => {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaImage, setMetaImage] = useState('');

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
    if (post) {
      setMetaTitle(post.title);
      setMetaDescription(post.content);
      setMetaImage(post.image);
    }
  }, [post]);

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
            .filter((relatedPost) => relatedPost._id !== post._id)
            .filter(
              (relatedPost) =>
                relatedPost.category === post.category &&
                relatedPost.genre === post.genre
            )
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
          // Exclude the first post from recommendedPosts
          const filteredRecommendedPosts = data.posts.slice(1);
          setRecommendedPosts(filteredRecommendedPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchRecommendedPosts();
  }, [post]);

  if (loading) {
    return (
      <Spinner
        size="xl"
        className="flex justify-center items-center min-h-screen"
      />
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Error loading post. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        {post && (
          <>
            <meta charSet="utf-8" />
            <title>{metaTitle}</title>
            <meta
              name="keywords"
              content="movies, series, anime, kdrama, reviews, moviemaven movies, entertainment, nkiri, moviemaven xyz, moviemaven,nkiri.com, movie box pro download, netnaija movie download, waploaded, Movies, tamil movies, bollywood movies, iron man, x men movies, bhojpuri movies, movies & reviews, Movies on Line, Movie TV, New Movies, Films on Line, All Movies, Movies Movies, Cloud Movies, Digital Movies, Movies Now, moviemaven - ultimate source, deadpool, spider man movies, telugu movies on line, full movie on line"
            />
            <meta name="author" content="MovieMaven" />
            <meta name="description" content={metaDescription} />
            <meta name="robots" content="index, follow" />
            <link
              rel="canonical"
              href={`https://www.moviemaven.xyz/post/getposts?slug=${postSlug}`}
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta
              property="og:url"
              content={`https://www.moviemaven.xyz/post/getposts?slug=${postSlug}`}
            />
            <meta property="og:site_name" content="MovieMaven" />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@MovieMaven_xyz" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
            <meta
              name="twitter:url"
              content={`https://www.moviemaven.xyz/post/getposts?slug=${postSlug}`}
            />
          </>
        )}
      </Helmet>

      <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
        <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
          {post.title}
        </h1>
        <Link to={`/search?category=${post.category}`} className="self-center mt-5">
          <Button color="gray" pill size="xs">
            {post.category}
          </Button>
        </Link>
        {post.genre && (
          <Link to={`/search?genre=${post.genre}`} className="self-center mt-5">
            <Button color="gray" pill size="xs">
              {post.genre}
            </Button>
          </Link>
        )}
        <img
          src={post.image}
          alt={post.title}
          className="mt-10 p-3 h-full w-full object-cover"
        />
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span className="italic">
            {(post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div
          className="p-3 max-w-2xl mx-auto w-full post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">Related {post.genre}</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost._id} post={relatedPost} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">YOU MIGHT ALSO LIKE</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {recommendedPosts.map((recommendedPost) => (
              <PostCard key={recommendedPost._id} post={recommendedPost} />
            ))}
          </div>
        </div>
        <CommentSection postId={post._id} />
      </main>
    </>
  );
};

export default PostPage;
