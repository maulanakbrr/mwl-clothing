import { Navbar } from 'react-bootstrap';
import {
  FooterContainer, FooterCopyright
} from './footer.styles';

const Footer = () => {
  return(
    <FooterContainer>
      <Navbar.Brand style={{ color: 'white' }}>
        MWL
      </Navbar.Brand>
      <FooterCopyright style={{ color: 'white' }}>
          &#169; MWL. All Rights Reserved
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;