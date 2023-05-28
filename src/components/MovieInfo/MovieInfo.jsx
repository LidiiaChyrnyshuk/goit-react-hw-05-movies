import PropTypes from 'prop-types';
import { Wrapper, InfoList } from './MovieInfo.styled';

const MovieInfo = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres = [],
}) => {
  return (
    <Wrapper>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://via.placeholder.com/200x300'
          }
          alt={title}
        />
      </div>

      <InfoList>
        <h1>
          {title}({release_date.substr(0, 4)})
        </h1>
        <p>User score:{Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview ? overview : 'Sorry, we do not have information.'}</p>
        <h3>Genres</h3>
        <p>{genres.map(item => item.name).join(', ')}</p>
      </InfoList>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      vote_average: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    }).isRequired
  ),
};

export default MovieInfo;
