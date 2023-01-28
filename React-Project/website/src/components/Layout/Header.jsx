import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Image from "../../assets/assets/site-logo.png";
import { useRef } from "react";
import { useState } from "react";
const Header = () => {
  const [Menu, setMenu] = useState(true);
  const [subMenu1, setSubMenu1] = useState(false);
  const [subMenu2, setSubMenu2] = useState(false);
  const [subMenu3, setSubMenu3] = useState(false);
  const [Navbar, setNavbar] = useState(false);

  const Toggle = () =>{
    if (Menu) {
        setMenu(false);
    } else{
        setMenu(true);
    }
  }
  useEffect (()=>{
    const handleResize = () =>{
        if (window.innerWidth < 1024) {
            setMenu(false);
        } else{
            setMenu(true);
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
        window.addEventListener('resize', handleResize);
    };
   
  },[]);

  useEffect(()=>{
    const headerscroll =()=>{
      if (window.scrollY >= 80){
    console.log("Hello");

        setNavbar(true);
      } else{
        setNavbar(false);
      }
    }

    headerscroll();
    return () =>{
      window.addEventListener('scroll',headerscroll);
    }
  },[])



  return (
    <BrowserRouter>
      <header  className={Navbar ? 'Navbar sticky  h-20 w-full  lg:flex items-center justify-between' : 'Navbar fixed z-10 h-20 w-full lg:flex items-center justify-between'} >
        <div className="logo">
          <img src={Image} alt="" height="90px" width="90px" />
        </div>
       {Menu && (<div className="lg:flex lg:w-[80%] Navmenu">
        <div className="menu flex items-center   ">
          <ul className="menu-items  lg:flex text-white xl:gap-8">
            <li className="menu-item main-home text-xl px-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={()=> !subMenu1 ? setSubMenu1(true): setSubMenu1(false)}  className="menu-item  text-xl px-4">
              <NavLink to="/service">Services</NavLink>
           {subMenu1 && (<div className=" sub-menu z-10 bg-white p-4  lg:absolute lg:w-[80%] lg:h-[200px] lg:right-[10%] lg:invisible lg:opacity-0 lg:translate-y-[2.5rem] ">
                <hr />
                <ul className="pl-4 font-bold text-black text-lg lg:grid lg:grid-cols-4">
                  <li>
                    <a href="">Logo Designing</a>
                  </li>
                  <li>
                    <a href="">Digital marketing</a>
                  </li>
                  <li>
                    <a href="">Branding</a>
                  </li>
                  <li>
                    <a href="">Web Designing</a>
                  </li>
                  <li>
                    <a href="">Online reception services</a>
                  </li>
                  <li>
                    <a href="">UI/UX</a>
                  </li>
                </ul>
              </div>)}
            </li>
            <li onClick={()=> !subMenu2 ? setSubMenu2(true): setSubMenu2(false)} className="menu-item  text-xl px-4">
              <NavLink to="/work">Pricing</NavLink>
             {subMenu2 && (<div className=" sub-menu rounded z-10 p-4 bg-white  lg:absolute  lg:w-[80%] lg:h-[200px] lg:left-[10%] lg:invisible lg:opacity-0 lg:translate-y-[2.5rem]  ">
                <hr />
                <ul className="pl-4 font-bold text-black text-lg lg:grid lg:grid-cols-3">
                  <li>
                    <a href="">Web Development pakages</a>
                  </li>
                  <li className="border">
                    <a href="">Digital marketing pakages</a>
                  </li>
                  <li>
                    <a href="">Youtube Subsription packages</a>
                  </li>
                </ul>
              </div>)}
            </li>
            <li className="menu-item  text-xl px-4">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li onClick={()=> !subMenu3 ? setSubMenu3(true): setSubMenu3(false)} className="menu-item text-xl px-4">
              <NavLink to="/about">About us</NavLink>
            {subMenu3 && ( <div className="sub-menu lg:rounded z-10  p-4 bg-white lg:absolute  lg:right-[10%] lg:w-[80%] lg:h-[200px]    lg:invisible lg:opacity-0 lg:translate-y-[2.5rem] ">
                <hr />
                <ul className="pl-4 font-bold text-lg text-black lg:grid lg:grid-cols-4 lg:gap-10">
                  <li>
                    <a href="">Introduction</a>
                  </li>
                  <span className="h-40 opacity-10 rounded-xl w-[2px] mt-2 bg-black left-[20%] absolute"></span>
                  <li>
                    <a href="">How we work</a>
                  </li>
                  <span className="h-40 w-[2px] opacity-10 rounded-xl mt-2 bg-black left-[45%] absolute"></span>

                  <li>
                    <a href="">Our Activities</a>
                  </li>
                  <span className="h-40 w-[2px] opacity-10 rounded-xl mt-2 bg-black left-[70%] absolute"></span>
                  <li>
                    <a href="">Our Team</a>
                  </li>
                </ul>
              </div>)}
            </li>
            <li className="menu-item  text-xl px-4">
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:translate-x-[-3rem] lg:absolute lg:right-0 lg:top-2  translate-x-0 p-2">
          <button className="header-Btn text-red-500 bg-white px-4 py-3 rounded-3xl">
            Join with us
          </button>
        </div>
        </div>)}
        <div onClick={Toggle} className="lg:hidden absolute top-8 right-6   ">
          <svg
            width="40"
            height="30"
            viewBox="0 0 136 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70332 0H58.2199C60.7934 0 63.2615 1.02231 65.0812 2.84204C66.9009 4.66176 67.9233 7.12984 67.9233 9.70332C67.9233 12.2768 66.9009 14.7449 65.0812 16.5646C63.2615 18.3843 60.7934 19.4066 58.2199 19.4066H9.70332C7.12984 19.4066 4.66176 18.3843 2.84204 16.5646C1.02231 14.7449 0 12.2768 0 9.70332C0 7.12984 1.02231 4.66176 2.84204 2.84204C4.66176 1.02231 7.12984 0 9.70332 0ZM77.6266 77.6266H126.143C128.717 77.6266 131.185 78.6489 133.004 80.4686C134.824 82.2883 135.847 84.7564 135.847 87.3299C135.847 89.9034 134.824 92.3714 133.004 94.1912C131.185 96.0109 128.717 97.0332 126.143 97.0332H77.6266C75.0531 97.0332 72.585 96.0109 70.7653 94.1912C68.9456 92.3714 67.9233 89.9034 67.9233 87.3299C67.9233 84.7564 68.9456 82.2883 70.7653 80.4686C72.585 78.6489 75.0531 77.6266 77.6266 77.6266ZM9.70332 38.8133H126.143C128.717 38.8133 131.185 39.8356 133.004 41.6553C134.824 43.4751 135.847 45.9431 135.847 48.5166C135.847 51.0901 134.824 53.5582 133.004 55.3779C131.185 57.1976 128.717 58.2199 126.143 58.2199H9.70332C7.12984 58.2199 4.66176 57.1976 2.84204 55.3779C1.02231 53.5582 0 51.0901 0 48.5166C0 45.9431 1.02231 43.4751 2.84204 41.6553C4.66176 39.8356 7.12984 38.8133 9.70332 38.8133Z"
              fill="white"
            />
          </svg>
        </div>
      </header>
  
  );
};

export default Header;
