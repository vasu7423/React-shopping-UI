import React from 'react'

const Header = () => {
  return (
    <div class='header-sec'>
        <div className="left-header">
            <div className="shipping">
                <h3>Shopping Mall</h3>
            </div>   
        </div>
        <div className="center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Beauty</li>
                <li>Sports</li>
            </ul>           
        </div>
        
        <div className="search-bar">
            <input type="text" placeholder='search your item' className='search-bar'/>
        </div>
        <div className="search-logo">
            <img src="search-logo.svg" alt="search-icon" />
        </div>
        <div className="right-header">
            
            <div className="Cart">Cart</div>
            <div className="sign-in">sign-in/sign-up</div>
            <div className="help">help </div>
        </div>
    </div>
  )
}

export default Header