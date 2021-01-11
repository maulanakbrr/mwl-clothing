import { Container, Row, Col } from 'react-bootstrap';

import Slideshow from '../../components/slideshow/slideshow.component';
import HomeItem from '../../components/home-item/home-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
  HomeContainer, HomeTitle, HomeItemContainer
} from './homepage.styles';

const Homepage = () => {
  return(
    <HomeContainer>
      <Slideshow/>
      
      <Container>
        <HomeTitle className='text-center'>{'mwl-clothing'.toUpperCase()}</HomeTitle>
        
        <Row className='mt-3'>
          <Col xs={12} className='mb-3'>
            <h4 className='text-center'>FEATURED ITEMS</h4>
          </Col>
          <HomeItemContainer md={3} sm={6} xs={12}>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12}>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12}>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12}>
            <HomeItem/>
          </HomeItemContainer>
          <Col xs={12} className='mb-3 text-center mt-3'>
            <CustomButton>Shop More</CustomButton>
          </Col>
        </Row>
        <br/>
        <br/>
        <Row className='mt-3'>
          <Col xs={12} className='mb-3'>
            <h4 className='text-center'>NEWEST ITEM</h4>
          </Col>
          <HomeItemContainer md={3} sm={6} xs={12}>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12}>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12}>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12}>
            <HomeItem/>
          </HomeItemContainer>
          <Col xs={12} className='mb-3 text-center mt-3'>
            <CustomButton>Shop More</CustomButton>
          </Col>
        </Row>

      </Container>
    </HomeContainer>
  );
};

export default Homepage;