import { Button, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';
import { Helmet } from 'react-helmet';
// import AdComponent from '../components/Ads';

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
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRelatedPosts = async () => {
        const res = await fetch(`/api/post/getposts?category=${post && post.category}&limit=3`);
        const data = await res.json();
        if (res.ok) {
          // Exclude the current post from related posts
          const filteredRelatedPosts = data.posts.filter(
            (relatedPost) => relatedPost._id !== (post && post._id)
          );
          setRelatedPosts(filteredRelatedPosts);
        }
      };
      fetchRelatedPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, [post]);

  useEffect(() => {
    try {
      const fetchRecommendedPosts = async () => {
        // Fetch recommended posts from different categories
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          // Exclude the current post from recommended posts
          const filteredRecommendedPosts = data.posts.filter(
            (recommendedPost) =>
              recommendedPost._id !== (post && post._id) &&
              recommendedPost.category !== (post && post.category)
          );
          setRecommendedPosts(filteredRecommendedPosts);
        }
      };
      fetchRecommendedPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, [post]);

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
  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  
  if (error)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <p>Error loading post. Please try again later.</p>
      </div>
    );

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
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className='mt-10 p-3 h-full w-full object-cover'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      
      {/* Related Posts Section */}
      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Related {post && post.category}</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {relatedPosts &&
            relatedPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>

      {/* Recommended Posts Section */}
      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recommended Post To Check Out</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recommendedPosts &&
            recommendedPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>

      {/* Comment Section */}
      <CommentSection postId={post._id} />

      {/* CallToAction */}
      {/* <div className='max-w-4xl mx-auto w-full'>
        <CallToAction />
      </div> */}
    </main>
    </React.Fragment>
  );
}
