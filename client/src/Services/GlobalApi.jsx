/* eslint-disable no-useless-catch */
import axios from 'axios';

const movieBaseURL = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;
const movieByGenreBaseURL = import.meta.env.VITE_MOVIEBY_GENRE_BASE_URL;
const movietvShow = import.meta.env.VITE_MOVIE_TVSHOW;
const chineseDramaUrl = import.meta.env.VITE_CHINESE_URL
const kDramaUrl = import.meta.env.VITE_KOREAN_URL
const internationalMoviesUrl = import.meta.env.VITE_INTERNATIONAL_URL
const bollywoodMovieUrl = import.meta.env.VITE_BOLLYWOOD_URL
const phillipineMoviesUrl = import.meta.env.VITE_PHILIPPINES_URL
const nigeriaMoviesUrl = import.meta.env.VITE_NIGERIA_URL
const southafricaMoviesUrl = import.meta.env.VITE_SOUTHAFRICAN_URL

export function fetchTrendingVideos() {
  return axios.get(`${movieBaseURL}/trending/all/day?api_key=${api_key}&append_to_response=videos,images`);
}

export function fetchTrendingTvShows() {
  return axios.get(`${movieBaseURL}/trending/tv/day?api_key=${api_key}&append_to_response=videos,images`);
}

export function getMovieByGenreId(id, page = 1) {
  return axios.get(`${movieByGenreBaseURL}&with_genres=${id}&page=${page}&append_to_response=videos,images`);
}

export function getMovieByTvShow(id, page=1){
  return axios.get(`${movietvShow}?api_key=${api_key}&with_genres=${id}&page=${page}&append_to_response=videos,images`)
}

export function getChineseDrama(page){
  return axios.get(`${chineseDramaUrl}&page=${page}`)
}

export function getKoreanDrama(page){
  return axios.get(`${kDramaUrl}&page=${page}`)
}

export function getInternationalMovies(page){
  return axios.get(`${internationalMoviesUrl}&page=${page}`)
}
export function getBollywoodMovies(page){
  return axios.get(`${bollywoodMovieUrl}&page=${page}`)
}
export  function getPhillipineMovies(page){
  return axios.get(`${phillipineMoviesUrl}&page=${page}`)
}

export function getNigeriaMovies(page) {
 return axios.get(`${nigeriaMoviesUrl}&page=${page}`)
}

export  function getSouthafricaMovies(page) {
 return axios.get(`${southafricaMoviesUrl}&page=${page}`)
}

export function getMovieDetails(id) {
  return axios.get(`${movieBaseURL}/movie/${id}?api_key=${api_key}&append_to_response=videos,images`);
}
