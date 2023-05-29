import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledLink, List } from './MoviesList.styled';
import { Contaner } from '../../pages/Home/Home.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Contaner>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title ? movie.title : 'N/A'}
            </StyledLink>
          </li>
        ))}
      </List>
    </Contaner>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
