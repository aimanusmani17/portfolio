import React, { useState } from 'react';
import Styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navbarHeader}>
        <h2>Aiman Usmani</h2>
        <button className={Styles.menuToggle} onClick={toggleMenu}>
          ☰ {/* This is the hamburger icon */}
        </button>
      </div>
      <ul className={`${Styles.navLinks} ${isOpen ? Styles.showMenu : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
