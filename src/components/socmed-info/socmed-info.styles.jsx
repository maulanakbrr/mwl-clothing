import styled, { css } from 'styled-components';

export const SocmedInfoContainer = styled.section`
  background: #fcfcfc;
  border-radius: 16px;
  width: 50vw;
  margin: 50px auto;
  display: flex;
  height: 30vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  box-shadow: none;
  transition: box-shadow .5s;

  &:hover{
    box-shadow: 1px 6px 10px 0 rgba(0, 0, 0, 0.2);
  }
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

`;

export const normalStyle = css`
  &:hover{
    text-decoration: none;
  }
`;

export const instagramStyles = css`
  &:hover{
    text-decoration: none;
    color: #3956fa;
  }
`;

export const shopeeStyles = css`
  &:hover{
    text-decoration: none;
    color: #ffa500
  }
`;

const getButtonStyle = props => {
  if (props.isInstagram){
    return instagramStyles;
  }

  return props.isShopee ? shopeeStyles : normalStyle;
}

export const SocmedLink = styled.a`
  padding: 5px 15px;
  font-size: 1.2rem;
  color: black;
  
  letter-spacing: 1px;
  transition: color .4s;

  ${getButtonStyle};
`;