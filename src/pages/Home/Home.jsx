import { useState, useEffect } from 'react';
import { getTrendingMoviesDay } from 'services/moviesAPI';
import Loader from '../../components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

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
      <div>
        <MoviesList movies={movies} />
        {isLoading && <Loader />}
      </div>
    </main>
  );
};

export default Home;
