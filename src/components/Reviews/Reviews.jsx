import Loader from 'components/Loader/Loader';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'services/moviesAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieReviewsById(movieId).then(setReviews).finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {reviews?.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      {reviews && <ReviewsList reviews={reviews} />}
    </div>
  );
};

export default Reviews;
