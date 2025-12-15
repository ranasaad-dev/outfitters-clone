import React from 'react'
import {Logo} from '/src/components/navbar/icons/icons.jsx';
import { Link } from 'react-router-dom';
import './footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='first'>
        <Link to={"/faq"}>FAQ'S</Link>
        <Link to={'/login'} >Log In/Sign Up</Link>
        <Link to={"/how_to_buy"}>How to Buy</Link>
        <Link to={"/payment"}>Payment</Link>
        <Link to={"/shipping"}>Shipping & Deliveries</Link>
        <Link to={"/exchange"}>Exchange & Returns</Link>
      </div>

      <div className='second'>
        <Logo w="210" h="120" c="white"/>
<p>@ Copyrights Reserved by Outfitters 2024</p>
      </div>
      <div className='third'>
<Link to={"/about"}>About Us</Link>
<Link to={"/retail"}>Retail Stores</Link>
<Link to={"/contact"}>Contact Us</Link>
<Link to={"/work"}>Work With Us</Link>
      </div>
    </div>
  )
}

export default Footer
