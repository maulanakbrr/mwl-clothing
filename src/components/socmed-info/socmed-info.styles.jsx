import styled from 'styled-components';

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
  box-shadow: 1px 6px 10px 0 rgba(0, 0, 0, 0.2);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

`;

export const SocmedLink = styled.a`
  padding: 5px 15px;
  font-size: 1.1rem;
  color: black;
  transition: color 1s;

  &:hover{
    text-decoration: none;
  }
`;