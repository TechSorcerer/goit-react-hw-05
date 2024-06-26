import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWQ5MDYyNDZiMGE0MjljNjFkYjJjOGY2ZTdiNjc5MCIsIm5iZiI6MTcxOTM5MzQwMy44MjI3MjEsInN1YiI6IjY2N2JkYjUzMDRhOWNkNzExMWU1ODk5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.82IT4xBPY7kr7nZWgu5qWM54QLUQY-FD9W2QL3RUkn4";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    ...options,
    params: { query },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    options
  );
  return response.data.results;
};
