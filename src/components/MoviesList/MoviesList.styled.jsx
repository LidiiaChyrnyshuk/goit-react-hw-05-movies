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
  font-size: 16px;
  text-decoration: none;
  border-radius: 4px;
  сolor: black;
  box-shadow: 0 0 8px rgba(100, 234, 234, 0.451);
  transition: 0.2s color cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #afe5e5;
  }
`;
