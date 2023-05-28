import CastList from 'components/CastList/CastList';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCreditsById } from 'services/moviesAPI';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieCreditsById(movieId).then(setCast).finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {cast?.length === 0 && <p>Sorry, we don't have information.</p>}
      {cast && <CastList cast={cast} />}
    </div>
  );
};

export default Cast;
