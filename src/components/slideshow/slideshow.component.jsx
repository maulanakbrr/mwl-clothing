import { Carousel } from 'react-bootstrap';
import DATA from './slideshow.data';

import {
  CarouselImage
} from './slideshow.styles';

const Slideshow = () => {
  const slideData = DATA;

  return(
    <Carousel >
      {
        slideData.map((item, index) => (
          <Carousel.Item key={index} style={{ backgroundColor: 'grey', height: 'calc(60vh)' }} interval={5000}>
            <CarouselImage style={{ backgroundImage: `url(${item.imageUrl})`}}/>
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default Slideshow;