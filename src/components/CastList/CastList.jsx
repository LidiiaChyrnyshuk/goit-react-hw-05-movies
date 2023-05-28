import PropTypes from 'prop-types';

const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(item => (
        <li key={item.id}>
          <img
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                : 'https://via.placeholder.com/100x150'
            }
            alt={`${item.name}`}
          />
          <p>{item.name}</p>
          <p>Character:{item.character}</p>
        </li>
      ))}
    </ul>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CastList;
