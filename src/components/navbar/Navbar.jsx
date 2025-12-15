import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { LuMenu } from 'react-icons/lu';
import { BiSearch } from 'react-icons/bi';
import { Profile, Cart, Logo } from './icons/icons.jsx';
import LeftSideBar from '../left-sidebar/left-sidebar.jsx';
import { BsXLg } from 'react-icons/bs';
import Search from '/src/components/search/search.jsx';
import Cartbar from '/src/components/cart/cart.jsx'

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [leftState, setLeftState] = useState(false);
  const [cartState, setCartState] = useState(false);
  function Left() {
    setLeftState(!leftState);
  }
  function Right() {
    setCartState(!cartState);
  }
  return (<>
    <div className={leftState ? 'nav-menu active-left' : 'nav-menu left'}>
      <BsXLg className="close-LSB" onClick={Left} />
      <LeftSideBar />
    </div>

    <div className={cartState ? 'cart cart-active' : 'cart cart-hidden'}>
    <BsXLg className="close-cart" onClick={Right} />
      <Cartbar />
    </div>

    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo-container">
        <LuMenu onClick={Left} />
        <Link to={"/"}><Logo w="122" h="75" c="black" /></Link>
      </div>

      {/* Cart and Profile Icons */}
      <div className="navbar-icons">
        <BiSearch onClick={() => setSearchOpen(true)} />
        <Search active={searchOpen} onClose={() => setSearchOpen(false)} />
        <Link to="/login"><Profile /></Link>
        <Cart onClick={Right}/>
      </div>
    </nav>
  </>
  );
};

export default Navbar;
