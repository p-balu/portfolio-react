import React, { useEffect, useRef, useState } from "react";
// import Signature from "../Images/Signature3.png";
import "../Assets/navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavHeader = () => {
  const [height, setHeight] = useState(0);
  const [className, setClassName] = useState("");
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  //getting the y position
  window.addEventListener("scroll", (event) => {
    setHeight(window.scrollY);
  });

  useEffect(() => {
    if (height > 0) {
      setClassName("navigation1");
    } else {
      setClassName("navigation");
    }
  }, [height]);

  //event handler to show navigation in mobiles
  const handleOpenClick = (event) => {
    event.preventDefault();
    console.log("open clicked");
    setShow(true);
  };

  const handleCloseClick = (event) => {
    event.preventDefault();
    console.log("closed button clicked");
    setShow(false);
  };

  return (
    <div className={`${className}`}>
      {/* <img src={Signature} alt="logo" className="logo" /> */}
      <div className="navContainer">
        <span className="name"> Balachander Rao Palepu </span>
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
        {!show && (
          <button className="hamburger" onClick={handleOpenClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        )}
        {show && (
          <button className="hamburger1" onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        )}
      </div>
      {show && (
        <nav className="navLinks1" ref={buttonRef}>
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
      )}
    </div>
  );
};
export default NavHeader;
