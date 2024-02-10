import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';
import { Helmet } from 'react-helmet';

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
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/client/public/sw.js');
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414334205797074"
     crossorigin="anonymous"></script>
     <script src="https://alwingulla.com/88/tag.min.js" data-zone="39045" async data-cfasync="false"></script>
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
  </React.Fragment>
);