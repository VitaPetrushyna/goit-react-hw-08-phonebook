import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #5389e6;

  &.active {
    color: #0d47ac;
  }
`;
