import { GoBackLink } from 'components/GoBackLink/GoBackLink';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetailsById } from 'services/moviesAPI';
import { Contaner } from '../Home/Home.styled';
import { DetailsList, DetailsLink } from './MovieDetails.styled';

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
      <Contaner>
        {isLoading && <Loader />}
        <GoBackLink path={location?.state?.from ?? '/'} />
        <MovieInfo {...movie} />
        <div>
          <p>Additional information</p>
          <DetailsList>
            <li>
              <DetailsLink to="cast" state={location.state?.from ?? '/'}>
                Cast
              </DetailsLink>
            </li>
            <li>
              <DetailsLink to="reviews" state={location.state?.from ?? '/'}>
                Reviews
              </DetailsLink>
            </li>
          </DetailsList>
        </div>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Contaner>
    </section>
  );
};

export default MovieDetails;
