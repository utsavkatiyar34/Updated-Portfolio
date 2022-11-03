import React from 'react';
import "../styles/Navbar.css";
import{NavLink}from "react-router-dom";

const Navbar= () =>{
  return (
        <nav className="navbar">
        <div className='logonav'>
        <NavLink to="/" className='logonav-nav'> &#60; UTSAV KATIYAR &#47; &#62;</NavLink>
        </div>
        <div className='menu'>
         <ul>
                <NavLink to="/skills"  className='menulinks'>Skills</NavLink>
        </ul>
        <ul>
                <NavLink to="/projects" className='menulinks'>Projects</NavLink>
        </ul>
        <ul>
                <NavLink to="/achivements" className='menulinks'>Achivements</NavLink>
        </ul>
        <ul>
                <NavLink to="/education" className='menulinks'>Education</NavLink>
        </ul>
        {/* <ul>
                <NavLink to="/contact" className='menulinks'>Contact Me</NavLink>
        </ul>  */}
        <ul>
                <NavLink to="/form" className='menulinks'>Contact</NavLink>
        </ul>          
        </div>
      </nav>
 
  );
};
Navbar.protoTypes={};
export default Navbar;
