import axios from 'axios';

const movieBaseURL = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=a4e8c01c242054960a1c99efdf9e33af';

export function fetchTrendingVideos() {
  return axios.get(`${movieBaseURL}/trending/all/day?api_key=${api_key}`);
}

export function getMovieByGenreId(id) {
  return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
}
