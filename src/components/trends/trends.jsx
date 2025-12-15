import React from 'react';
import { Link } from 'react-router-dom';
import './trends.css';
function Trends() {
    return (
        <div className='trends'>
            <p>Get the latest trends first</p>
            <input type="email" name="email" id="subscription" placeholder="Email" />
            <ul>
               
                <li> <a href="www.facebook.com">Facebook |</a></li>
                <li> <Link to="/login">Instagram</Link> |</li>
                <li> <Link to="/login">TikTok</Link> |</li>
                <li> <Link to="/login">YouTube</Link> |</li>
                <li> <Link to="/login">Pinterest</Link></li>
            </ul>
        </div>
    )
}

export default Trends;