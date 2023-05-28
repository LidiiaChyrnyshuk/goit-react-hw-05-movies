import { Link } from 'react-router-dom';
export const GoBackLink = ({ path }) => {
  return (
    <div
      style={{
        marginBottom: '60px',
        color: '#000',
        letterSpacing: '0.06em',
        textDecoration: 'underline',

        borderColor: 'gray',
      }}
    >
      <Link to={path}>Back</Link>
    </div>
  );
};
