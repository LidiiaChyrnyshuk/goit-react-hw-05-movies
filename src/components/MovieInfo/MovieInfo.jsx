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
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : 'https://via.placeholder.com/200x300'
        }
        alt={title}
      />
      <h1>
        {title}({release_date})
      </h1>
      <p>User score:{Math.round(vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{overview ? overview : 'Sorry, we do not have information.'}</p>
      <h2>Genres</h2>
      <p>{genres.map(item => item.name).join(', ')}</p>
    </div>
  );
};

export default MovieInfo;
