import { BackLink } from './GoBackLink.styled';

export const GoBackLink = ({ path }) => {
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
