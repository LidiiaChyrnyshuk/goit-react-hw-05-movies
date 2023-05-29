import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 8px;
  font-size: 20px;
  text-decoration: none;

  сolor: black;

  transition: 250ms color cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: aqua;
  }
`;
