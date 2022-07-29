import "../Assets/about.css";
import Image from "../Images/Balu.jpeg";
import "font-awesome/css/font-awesome.min.css";
import TechStack from "./techStack";
import React, { Component } from "react";


const About = () => {
  return (
    <section className="about" id="about">
      <div className="aboutText">
        <h1>ABOUT ME</h1>
      </div>
      <div className="image">
        <img src={Image} alt="image1" />
      </div>
      <div className="content">
        <div className="container">
          <p className="point1">
            My name is Balachander Rao Palepu a Software Developer from
            Hyderabad, creates both web & mobile applications.
            <br />
          </p>
          <p className="point2">
            Currently pursuing Masters Degree in Software Engineering Technology
            and Artificial Intelligence from Centennial College.
            <br />
          </p>
          <p className="point3">
            I worked hard and gained some experience in the field of software
            and web development and love to improve understanding through better
            perspercitve.
            <br />
          </p>
        </div>
        <TechStack />
      </div>
    </section>
  );
};
export default About;
