import { useState } from 'react';
import { Form } from 'react-bootstrap';
import CustomButton from '../custom-button/custom-button.component';

import {
  Tilte, ContactFormContainer
} from './contact-form.styles';

const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = userData;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userData);
    setUserData({
      name: '',
      email: '',
      message: ''
    });
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  return(
    <ContactFormContainer>
      <Tilte>Send Us A Message</Tilte>
      <Form className='text-left' onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label className=" text-white">Name</Form.Label>
          <Form.Control 
            name="name"
            type="text" 
            placeholder="enter name" 
            value={name} 
            onChange={handleChange}
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control 
            name="email" 
            type="email" 
            placeholder="enter email" 
            value={email} 
            onChange={handleChange}
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label className="text-white">Message</Form.Label>
          <Form.Control 
            name="message" 
            as="textarea" 
            rows={3} 
            placeholder="enter message" 
            value={message} 
            onChange={handleChange}
            className="form-input"
          />
        </Form.Group>

        <CustomButton type='submit' isForm>Submit</CustomButton>
      </Form>

    </ContactFormContainer>
  );
};

export default ContactForm;