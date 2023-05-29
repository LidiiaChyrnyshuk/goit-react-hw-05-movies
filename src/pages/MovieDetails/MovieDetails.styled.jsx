import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const DetailsLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 18px;

  &:hover,
  &:focus {
    color: aqua;
  }
`;
