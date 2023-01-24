import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';
import Image from '../../assets/assets/site-logo.png';

const Header = () => {
  return (
    <BrowserRouter>
    <header className="Navbar px-2 shadow-xl fixed z-30 h-20 w-full bg-red-600 flex items-center justify-between">
        <div className="logo">
            <img src={Image} alt="" height="90px" width="90px"/>
        </div>
        <div className="menu flex items-center  ">
            <ul className="menu-items flex text-white gap-8">
                <li className="menu-item  text-xl px-4"><NavLink to='/'>Home</NavLink></li>
                <li className="menu-item  text-xl px-4"><NavLink to='/service'>Service</NavLink></li>
                <li className="menu-item  text-xl px-4"><NavLink to='/work'>Work</NavLink></li>
                <li className="menu-item  text-xl px-4"><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li className="menu-item  text-xl px-4"><NavLink to='/about'>About us</NavLink></li>
                <li className="menu-item  text-xl px-4"><NavLink to='/contact'>Contact us</NavLink></li>
            </ul>
        </div>
        <div className="translate-x-[-3rem]">
            <button className="header-Btn text-red-500 bg-white px-4 py-3 rounded-3xl">Join with us</button>

        </div>

    </header>
    </BrowserRouter>
  )
}

export default Header
