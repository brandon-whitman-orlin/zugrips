import React from "react";
import "./Navbar.css";

function Navbar({ theme, setTheme }) {
  return (
    <ul className="Navbar">
      <li id="link-home">
        <a href="#">Home</a>
      </li>
      <div tabIndex="0" className="other-links">
        <li className="nav-hamburger">=</li>
        <div className="dropdown">
          <li id="link-shop">
            <a href="#">Shop</a>
          </li>
          <li id="link-about">
            <a href="#">About</a>
          </li>
          <li id="link-shows">
            <a href="#">Shows</a>
          </li>
          <li id="link-articles">
            <a href="#">Articles</a>
          </li>
          <li id="link-contact">
            <a href="#">Contact</a>
          </li>
        </div>
      </div>
    </ul>
  );
}

export default Navbar;
