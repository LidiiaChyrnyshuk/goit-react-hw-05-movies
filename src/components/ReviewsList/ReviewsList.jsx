import PropTypes from 'prop-types';
import { ReviewsInfo } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsInfo>
      {reviews.map(item => (
        <li key={item.id}>
          <h3>Author: {item.author}</h3>
          <p>{item.content}</p>
        </li>
      ))}
    </ReviewsInfo>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ReviewsList;
