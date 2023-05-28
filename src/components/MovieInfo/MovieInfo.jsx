import PropTypes from 'prop-types';

const MovieInfo = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres = [],
}) => {
  return (
    <div>
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

      <div>
        <h1>
          {title}({release_date.substr(0, 4)})
        </h1>
        <p>User score:{Math.round(vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{overview ? overview : 'Sorry, we do not have information.'}</p>
        <h2>Genres</h2>
        <p>{genres.map(item => item.name).join(', ')}</p>
      </div>
    </div>
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
