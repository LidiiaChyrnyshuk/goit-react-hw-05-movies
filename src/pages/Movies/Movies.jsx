import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByTitle } from 'services/moviesAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoadign] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getMoviesByTitle(query)
      .then(setMovies)
      .finally(() => {
        setIsLoadign(false);
      });
  }, [searchParams]);

  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <section>
      <div>
        <SearchForm onSubmit={onSubmit} />
        {movies && <MoviesList movies={movies} />}
        {movies?.length === 0 && <p>Sorry, there is no movies your request.</p>}
        {isLoading && <Loader />}
      </div>
    </section>
  );
};

export default Movies;
