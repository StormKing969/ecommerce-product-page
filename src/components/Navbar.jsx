import React from 'react';
import hamburgerIcon from '../assets/icons/icon-menu.svg';
import cartIcon from '../assets/icons/icon-cart.svg';
import avatarImage from '../assets/avatar/image-avatar.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="menu_app">
            <img src={hamburgerIcon} alt="Hamburger Icon"/>

            <h1>sneakers</h1>
        </div>

        <div className="menu_user">
            <div className="cart_icon">
                <img src={cartIcon} alt="Cart Icon"/>
            </div>

            <div className="avatar_image">
                <img src={avatarImage} alt="Avatar"/>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar