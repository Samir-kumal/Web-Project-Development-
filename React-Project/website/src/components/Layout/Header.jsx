import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../../assets/assets/site-logo.png';

const Header = () => {
  return (
    <header className="Navbar px-2 shadow-xl fixed z-30 h-20 w-full bg-red-600 flex items-center justify-between">
        <div className="logo">
            <img src={Image} alt="" height="90px" width="90px"/>
        </div>
        <div className="menu flex items-center  ">
            <ul className="menu-items flex text-white gap-8">
                <li className="menu-item  text-xl px-4"><Link to='/'>Home</Link></li>
                <li className="menu-item  text-xl px-4"><Link to='/service'>Service</Link></li>
                <li className="menu-item  text-xl px-4"><Link to='/work'>Work</Link></li>
                <li className="menu-item  text-xl px-4"><Link to='/portfolio'>Portfolio</Link></li>
                <li className="menu-item  text-xl px-4"><Link to='/about'>About us</Link></li>
                <li className="menu-item  text-xl px-4"><Link to='/contact'>Contact us</Link></li>
            </ul>
        </div>
        <div className="translate-x-[-3rem]">
            <button className="header-Btn text-red-500 bg-white px-4 py-3 rounded-3xl">Join with us</button>

        </div>

    </header>
  )
}

export default Header
