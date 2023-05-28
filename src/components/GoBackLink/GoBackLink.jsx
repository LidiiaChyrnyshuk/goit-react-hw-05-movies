import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BackLink } from './GoBackLink.styled';

export const GoBackLink = ({ path }) => {
  console.log(path);
  return (
    <div
      style={{
        marginBottom: '30px',
        color: '#000',
        letterSpacing: '0.06em',
      }}
    >
      <BackLink to={path}>Back</BackLink>
    </div>
  );
};

GoBackLink.propTypes = {
  path: PropTypes.object.isRequired,
};
