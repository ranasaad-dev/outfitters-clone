import React from 'react';
import './filter-bar.css';
import { Two, Three, Four, Five } from "./icons/icons.jsx";


function FilterBar() {
    return (
        <div className='filter-bar-container'>
            <div className='filter-bar-item filter-bar-item-first'>
                <h2>MEN END OF SEASON SALE</h2>
            </div>
            <div className='filter-bar-item filter-bar-item-second'>
                <Two />
                 <Three />
                  <Four/>
            </div>
            <div className='filter-bar-item filter-bar-item-third'>
            <Five />
            </div>
        </div>
    )
}

export default FilterBar;