import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const HomeItemContainer = styled.div`
  height: 320px;
  width: 100%;
  border: 1px solid #ededed;
  margin: 10px 0px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover{
    .button{
      display: block;
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

export const ViewButton = styled(CustomButton)`
  display: none;
  position: absolute;
  top: 220px;
  left: 32%;
  width: 30%;
  opacity: .5;

  &:hover{
    opacity: .9;
  }
`;


