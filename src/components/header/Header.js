import React, { useState } from 'react'
import './Header.css'
import mountopImg from '../../assets/mountop.png'
import {FaTimes, FaUserCircle} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

const logo = (
    <div className='logo'>
     <Link to="/">
      <img src={mountopImg} alt='mountaintop' style={{width: "50px"}}/>
      <p>MTP</p>
     </Link>
    </div>
)

const Header = () => {
  const [showMenu, setSHowMenu] = useState(false)
  const [fixNav, setFixNav] = useState(false)

  const toggleMenu = () => {
    setSHowMenu(!showMenu)
  }

  const hideMenu = () => {
    setSHowMenu(false)
  }

  const setFixed = () => {
    if(window.scrollY >= 100) {
      setFixNav(true)
    } else {
      setFixNav(false)
    }
  }

  window.addEventListener("scroll", setFixNav)
  
  return (
    <header>
      <div className='header'>
       {logo}

       <nav>
       
        <ul className='desktop'>
        <li>
          <Link href='/profile' style={{color: "#ff7722"}}>
            <FaUserCircle size={16}/>
            Hi, Sagacious
         </Link>
        </li>
            <li>
             <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/login">About</NavLink>
            </li>
            <li>
            <NavLink to="/login">Contact Us</NavLink>
            </li>
            <li>
             <NavLink to="/login">Login</NavLink>
            </li>
        </ul>

         <div className={showMenu ? `nav-wrapper show-nav-wrapper`
            : `nav-wrapper`}
            onClick={hideMenu}
        
        ></div>
        <ul className={showMenu ? 'menu show-menu' : 'menu'}>

          <div className='menu-logo'>
            {logo}
            <FaTimes size={22} onClick={hideMenu}/>
          </div>
        <li>
          <Link href='/profile' style={{color: "#ff7722"}}>
            <FaUserCircle size={16}/>
            Hi, Sagacious
         </Link>
        </li>
            <li>
             <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/login">About</NavLink>
            </li>
            <li>
            <NavLink to="/login">Contact Us</NavLink>
            </li>
            <li>
             <NavLink to="/login">Login</NavLink>
            </li>
        </ul>
       </nav>

       <div className='menu-icon'>
        <AiOutlineMenu size={24} onClick={toggleMenu}/>
       </div>
      </div>
    </header>
  )
}

export default Header