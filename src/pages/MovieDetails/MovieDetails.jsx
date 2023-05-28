import { GoBackLink } from 'components/GoBackLink/GoBackLink';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetailsById } from 'services/moviesAPI';

const MovieDetails = () => {
  const [movie, SetMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetailsById(movieId).then(SetMovie).finally(setIsLoading(false));
  }, [movieId]);
  if (!movie) {
    return;
  }

  return (
    <section>
      <div>
        {isLoading && <Loader />}
        <GoBackLink path={location?.state?.from ?? '/'} />
        <MovieInfo {...movie} />
        <ul>
          <li>
            <Link to="cast" state={location.state?.from ?? '/'}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state?.from ?? '/'}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieDetails;
