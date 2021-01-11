import styled from 'styled-components';

export const HomeItemContainer = styled.div`
  height: 320px;
  width: 100%;
  border: 1px solid #ededed;
  margin: 10px 0px;
  border-radius: 10px;

  &:hover{
    .button{
      display: block;
      opacity: .7;

    }
  }

  @media screen and (max-width: 575px){
    width: 250px;
    margin: 0 auto;
  }

  @media screen and (max-width: 343px){
    width: 90%;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 80%;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ItemDescription = styled.div`
  text-align: center;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemDetail = styled.p`
  margin-bottom: 0px;
`;


