import React, { useState } from 'react'
import hamburgerIconOpen from '../../assets/icons/icon-menu.svg'
import hamburgerIconClose from '../../assets/icons/icon-close.svg'

const HamburgerMenu = () => {
  const [showMenu, setMenuState] = useState(true)

  function handleClick() {
    setMenuState(showMenu ? false : true)
  }

  return (
      <div className='hamburger_menu'>
        <div className='hamburger_close'>
          <img src={hamburgerIconOpen} alt="Hamburger Icon" onClick={handleClick}/>
        </div>

        <div className='hamburger_open' style={{display: showMenu ? "none" : "block"}}>
          <img src={hamburgerIconClose} alt="Hamburger Icon" onClick={handleClick}/>

          <ul>
              <li><a href='#'>Collections</a></li>
              <li><a href='#'>Men</a></li>
              <li><a href='#'>Women</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Contact</a></li>
          </ul>
        </div>
      </div>
  )
}

export default HamburgerMenu