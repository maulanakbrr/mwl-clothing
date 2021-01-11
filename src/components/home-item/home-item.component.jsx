
import {
  HomeItemContainer, Image, ItemDescription, ItemDetail, ViewButton
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

      <ViewButton className='button'>view</ViewButton>
    </HomeItemContainer>
  );
};

export default HomeItem;