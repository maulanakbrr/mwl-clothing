import styled from 'styled-components';

export const ButtonContainer = styled.button`
  min-width: 100px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 15px;
  color: black;
  font-size: 1rem;
  transition: 0.3s;

  &:hover{
    background-color: black;
    color: #fff;
  }

  &:focus{
    background-color: #fff;
    outline: 2px ;
    color: black;
    border: 1px solid grey;
  }
`;