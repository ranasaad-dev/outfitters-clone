import React from 'react';
import './menu-item.css';
import { BiPlusMedical } from 'react-icons/bi';

function MenuItem({ name, price, imgSrc , size, color, gender}) {
  return (
    <div className='menu-item'>
      
      <div>
        <img className="menu-item-img" src={`${imgSrc}`} alt="" />
            {/* <div >
              <BiPlusMedical className='bi-plus'/>
            </div> */}
          </div>
      <div className="content" >
           <h1 className="title">{name.toUpperCase()}</h1>
           <span className='variety'> {color} | {size.toUpperCase()} |{gender.toUpperCase()}</span>
           <p className="price">{price}</p>
        
      </div>
    </div>
  
  )
}
export default MenuItem;