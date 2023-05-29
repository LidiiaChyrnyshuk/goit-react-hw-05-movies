import { useState, useEffect } from 'react';
import { getTrendingMoviesDay } from 'services/moviesAPI';
import Loader from '../../components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { Contaner } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoadign] = useState(false);

  useEffect(() => {
    setIsLoadign(true);
    getTrendingMoviesDay()
      .then(setMovies)
      .finally(() => {
        setIsLoadign(false);
      });
  }, []);

  return (
    <main>
      <Contaner>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
        {isLoading && <Loader />}
      </Contaner>
    </main>
  );
};

export default Home;
