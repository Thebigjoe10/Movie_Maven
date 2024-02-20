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
const pageKeywords = "";
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
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
  </React.Fragment>
);