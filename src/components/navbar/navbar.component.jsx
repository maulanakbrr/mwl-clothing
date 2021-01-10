import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { 
  BrandLink, RightMenu, NavMenu, Icon, BarIcon 
} from './navbar.styles';

const NavBar = () => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => setHidden(!hidden);
  
  return(
    <Navbar fixed="top" className='justify-content-between bg-dark'>
      <Navbar.Brand >
        <BrandLink to='/' className='text-white'>
          {'mwl'.toUpperCase()}
        </BrandLink>
      </Navbar.Brand>
      <RightMenu>
        <NavMenu>
          <Link to='/' className='nav-link text-white'>
            Home
          </Link>
          <Link to='/product' className='nav-link text-white'>
            Product
          </Link>
          <Link to='/contact' className='nav-link text-white'>
            Contact
          </Link>
          <Link to='/faq' className='nav-link text-white'>
            FAQ
          </Link>
          <Link to='/sign-in-sign-up' className='nav-link text-white'>
            Sign in
          </Link>
        </NavMenu>

        <Icon onClick={toggleHidden}>
          <CartIcon/>
        </Icon>
        <Icon isMenu>
          <BarIcon/>
        </Icon>

        { hidden ? null : <CartDropdown/> }
      </RightMenu>
      
    </Navbar>
  );
};

export default NavBar;