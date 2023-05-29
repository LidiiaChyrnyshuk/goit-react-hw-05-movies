import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;

  box-shadow: 0px 2px 10px 1px aqua;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;
  background-color:white;
  }
    &.active {
    
    background-color:aqua;
    pointer-events: none;
  }
`;
