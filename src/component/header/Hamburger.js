import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./Hamburger.scss";

const Hamburger = () => {
  let showMenu = false;
  const hamburger = useRef();
  const nav = useRef();
  const menuNav = useRef();

  const toggleMenu = () => {
    if (!showMenu) {
      hamburger.current.classList.add("open");
      nav.current.classList.add("open");
      menuNav.current.classList.add("open");
      showMenu = true;
    } else {
      hamburger.current.classList.remove("open");
      nav.current.classList.remove("open");
      menuNav.current.classList.remove("open");
      showMenu = false;
    }
  };

  return (
    <div className="menu-btn" onClick={toggleMenu}>
      <span ref={hamburger} className="menu-btn__burger"></span>

      <nav className="nav" ref={nav}>
        <ul className="menu-nav" ref={menuNav}>
          <li className="menu-nav_item active">
            <Link className="menu-nav__link" to="/">
              Home
            </Link>
          </li>

          <li className="menu-nav_item active">
            <Link to="/About">About Us</Link>
          </li>

          <li className="menu-nav_item active">
            <Link to="/Shop/ALL">Shop</Link>
          </li>

          <li className="menu-nav_item active">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
