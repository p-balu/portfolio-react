import React from "react";
import Signature from "../Images/Signature3.png";
import "../Assets/navigation.css";

const NavHeader = () => {
  return (
    <div className="navigation">
      <img src={Signature} alt="logo" className="logo" />
      <nav className="navLinks">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavHeader;
