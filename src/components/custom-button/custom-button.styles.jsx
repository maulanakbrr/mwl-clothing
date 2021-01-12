import styled, { css } from 'styled-components';

export const defaultStyles = css`
  color: black;
  border: 1px solid black;

  &:hover{
    background-color: black;
    color: #fff;
  }

  &:focus{
    background-color: #000;
    outline: none;
    color: white;
  }
`;

export const instagramStyles = css`
  color: black;
  border: 1px solid #fff;
  /* border: none; */
  font-size: 1.5rem;
  width: 200px;

  &:hover{
    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    color: #fff;
    border-color: white;
  }

  &:focus{
    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    outline: none;
    border-color: white;
    color: white;
  }
`;

export const shopeeStyles = css`
  color: black;
  border: 1px solid black;
  font-size: 1.5rem;
  width: 200px;

  &:hover{
    background: #FF6600;
    color: #fff;
    border-color: white;
  }

  &:focus{
    background: #FF6600;
    outline: none;
    border-color: white;
    color: white;
  }
`;

export const getButtonStyles = props => {
  if (props.isInstagram){
    return instagramStyles;
  }

  return props.isShopee ? shopeeStyles : defaultStyles;
}

export const ButtonContainer = styled.button`
  min-width: 120px;
  padding: 5px;
  background-color: #fff;
  border-radius: 15px;
  font-size: 1rem;
  transition: 0.3s linear;

  

  ${getButtonStyles}
`;