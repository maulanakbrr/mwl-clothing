import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const FooterContainer = styled(Navbar)`
  background-color: #000;
  justify-content: space-between;

  @media screen and (max-width: 360px){
    flex-direction: column;
  }
`;

export const FooterCopyright = styled.div`
  color: #fff;
`;