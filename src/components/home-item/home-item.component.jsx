import CustomButton from '../custom-button/custom-button.component';

import {
  HomeItemContainer, Image, ItemDescription, ItemDetail
} from './home-item.styles';

const HomeItem = () => {
  return(
    <HomeItemContainer>
      <Image style={{
        backgroundImage: `url('${process.env.PUBLIC_URL + '/img/products/p1.jpg'}')`
      }}/>
      
      <ItemDescription>
        <ItemDetail>item name</ItemDetail>
        <ItemDetail>Rp. 19x.xxx</ItemDetail>
      </ItemDescription>

      <CustomButton isHomeButton className='button'>view</CustomButton>      
    </HomeItemContainer>
  );
};

export default HomeItem;