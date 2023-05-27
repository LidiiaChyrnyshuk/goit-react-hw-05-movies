import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const seachParams = new URLSearchParams({
  method: 'GET',
  api_key: '2bd24135f91a853c6b382cb0cbb4f46b',
  language: 'en-US',
  include_adult: false,
  headers: {
    accept: 'application/json',
  },
});

export const getTrendingMoviesDay = async () => {
  const path = '/trending/all/day';
  const { data } = await axios.get(`${path}?${seachParams}`);
  return data.results;
};

export const getMoviesByTitle = async query => {
  const path = '/search/movie';
  const { data } = await axios.get(`${path}?${seachParams}&query=${query}`);
  return data.results;
};

export const getMovieDetailsById = async movie_id => {
  const path = `/movie/${movie_id}`;
  const { data } = await axios.get(`${path}?${seachParams}`);
  return data;
};

export const getMovieCreditsById = async movie_id => {
  const path = `/movie/${movie_id}/credits`;
  const { data } = await axios.get(`${path}?${seachParams}`);
  return data.cast;
};

export const getMovieReviewsById = async movie_id => {
  const path = `/movie/${movie_id}/reviews`;
  const { data } = await axios.get(`${path}?${seachParams}`);
  return data.results;
};
