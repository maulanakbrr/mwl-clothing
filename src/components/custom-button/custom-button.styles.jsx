import styled, { css } from 'styled-components';

export const buttonStyles = css`
  position: relative;

  &:hover{
    font-size: 1.1rem
  }
`;

export const homeItemStyles = css`
  position: absolute;
  top: 220px;
  left: 32%;
  width: 30%;
  display: none;

  &:hover{
    border-color: grey;
  }

`;

export const getStyles = props => props.isHomeButton ? homeItemStyles : buttonStyles;

export const ButtonContainer = styled.button`
  min-width: 100px;
  padding: 5px 5px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 15px;
  color: black;
  font-size: 1rem;

  ${getStyles}

  &:focus{
    
    background-color: #fff;
    outline: none;
    color: black;
    border: 2px solid grey;
  }
`;