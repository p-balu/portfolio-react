import Header from "./header";
// import Svg from "../svg/main";
import "../Assets/home.css";
import React from "react";

const words = [
  "Full Stack Developer .",
  "Frontend Developer .",
  "UI/UX Developer .",
  "Freelancer .",
];

const Home = () => {
  return (
    <section className="home" id="home">
      <Header words={words} />
      {/* <div className="svg">
        <Svg />
      </div> */}
    </section>
  );
};

export default Home;
