import styled from 'styled-components';

export const Tilte = styled.h4`
  color: white;
  margin-bottom: 20px;
`;

export const ContactFormContainer = styled.div`
  padding: 20px;
  background: #3d3d3d;
  border-radius: 15px;

  input, textarea{
    &:focus{
      border-color: white;
      box-shadow: 0 0 0 0.1rem rgba(255,255,255,.5);
    }
  }
`;

