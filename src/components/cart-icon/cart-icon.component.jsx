import { FaShoppingBag } from 'react-icons/fa';

import { CartContainer, CartCount } from './cart-icon.styles';

const CartIcon = () => {
  return(
    <CartContainer onClick={() => console.log('clicked!')}>
      <FaShoppingBag/>
      <CartCount>0</CartCount>
    </CartContainer>
  );
};

export default CartIcon;