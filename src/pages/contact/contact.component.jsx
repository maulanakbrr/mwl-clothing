import { Container, Row, Col } from 'react-bootstrap';

import Breadcrumb from '../../components/breadcrumb/breadcrumb.component'; 
import ContactForm from '../../components/contact-form/contact-form.component';

import {
  ContactContainer
} from './contact.styles';

const ContactPage = () => {
  return(
    <ContactContainer>
      <Container>
      <div>
        <h1>Contact</h1>
        <div>
          <Breadcrumb>
            <li>
              <a href="/">home</a>
            </li>
            <li>contact</li>
          </Breadcrumb>
        </div>
      </div>

      <Row>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque similique autem eaque est id voluptate culpa accusantium at. Voluptatibus eum quaerat minima obcaecati earum. Veniam temporibus illo porro! Animi!</p>
        </Col>
        <Col>
          <ContactForm/>
        </Col>
      </Row>

      </Container>
    </ContactContainer>
  );
}; 

export default ContactPage;