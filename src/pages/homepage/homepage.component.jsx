import { Container, Row, Col } from 'react-bootstrap';

import Slideshow from '../../components/slideshow/slideshow.component';
import HomeItem from '../../components/home-item/home-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import SocmedInfo from '../../components/socmed-info/socmed-info.component';

import {
  HomeContainer, HomeTitle, HomeItemContainer
} from './homepage.styles';

const Homepage = () => {
  return(
    <HomeContainer className='mb-4'>
      <Slideshow/>
      
      <Container>
        <HomeTitle className='text-center'>{'mwl-clothing'.toUpperCase()}</HomeTitle>
        
        <Row className='mt-3'>
          <Col xs={12} className='mb-3'>
            <h3 className='text-center'>FEATURED ITEMS</h3>
          </Col>
          <HomeItemContainer md={3} sm={6} xs={12} className='mb-3'>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12} className='mb-3'>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12} className='mb-3'>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12} className='mb-3'>
            <HomeItem/>
          </HomeItemContainer>
          <Col xs={12} className='mb-3 text-center mt-3'>
            <CustomButton>Shop More</CustomButton>
          </Col>
        </Row>
        <br/>
        <Row className='mt-3'>
          <Col xs={12} className='mb-3'>
            <h3 className='text-center'>NEWEST ITEM</h3>
          </Col>
          <HomeItemContainer md={3} sm={6} xs={12} className='mb-3'>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12} className='mb-3'>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12} className='mb-3'>
            <HomeItem/>
          </HomeItemContainer>
          <HomeItemContainer md={3} sm={6} xs={12} className='mb-3'>
            <HomeItem/>
          </HomeItemContainer>
          <Col xs={12} className='mb-3 text-center mt-3'>
            <CustomButton>Shop More</CustomButton>
          </Col>
        </Row>

        <SocmedInfo/>

      </Container>
    </HomeContainer>
  );
};

export default Homepage;