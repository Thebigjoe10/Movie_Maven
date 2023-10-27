import axios from 'axios';

const movieBaseURL = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;

export function fetchTrendingVideos() {
  return axios.get(`${movieBaseURL}/trending/all/day?api_key=${api_key}`);
}
