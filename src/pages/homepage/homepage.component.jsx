import { Container } from 'react-bootstrap';

import Slideshow from '../../components/slideshow/slideshow.component';

import {
  HomeContainer
} from './homepage.styles';

const Homepage = () => {
  return(
    <HomeContainer>
      <Slideshow/>
      
      <Container>
        Main Content
      </Container>
    </HomeContainer>
  );
};

export default Homepage;