import styled, { css } from 'styled-components';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const BrandLink = styled(Link)`
  &:hover{
    text-decoration: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
`;

export const NavMenu = styled(Nav)`
  @media screen and (max-width: 575px){
    display: none !important;
  }
`;

export const iconStyles = css`
  display: block;
`;

export const menuIconStyles = css`
  display: none;

  @media screen and (max-width: 575px){
    display: block;
  }
`;

export const getIconStyles = props => props.isMenu ? menuIconStyles : iconStyles;


export const Icon = styled.div`
  color: white; 
  font-size: 1rem;
  padding: .25rem 1rem;
  
  ${getIconStyles}
`;

export const BarIcon = styled(FaBars)`
  &:hover{
    cursor: pointer;
  }
`;