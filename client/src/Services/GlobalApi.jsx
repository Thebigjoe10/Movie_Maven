import axios from 'axios';

const movieBaseURL = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;
const movieByGenreBaseURL = import.meta.env.VITE_MOVIEBY_GENRE_BASE_URL;
const movietvShow = import.meta.env.VITE_MOVIE_TVSHOW;

export function fetchTrendingVideos() {
  return axios.get(`${movieBaseURL}/trending/all/day?api_key=${api_key}`);
}

export function fetchTrendingTvShows() {
  return axios.get(`${movieBaseURL}/trending/tv/day?api_key=${api_key}`);
}

export function getMovieByGenreId(id, page = 1) {
  return axios.get(`${movieByGenreBaseURL}&with_genres=${id}&page=${page}`);
}

export function getMovieByTvShow(id, page=1){
  return axios.get(`${movietvShow}?api_key=${api_key}&with_genres=${id}&page=${page}`)
}