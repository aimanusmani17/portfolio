import React from 'react';
import Styles from '../Styles/Navbar.module.css';



const Navbar = () => {
    return (
      <nav className={Styles.navbar}>
        <h2>Aiman Usmani</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }



export default Navbar;