import React1 from "../svg/react";
import Html from "../svg/html";
import Css from "../svg/css";
import Javascript from "../svg/javascript";
import Express from "../svg/express";
import Database from "../svg/database";
import Bootstrap from "../svg/bootstrap";
import Java from "../svg/java";
import Python from "../svg/python";
import Github from "../svg/github";
import Vscode from "../svg/vscode";
import Yarn from "../svg/yarn";
import Npm from "../svg/npm";
import Tailwind from "../Images/tailwindcss.svg";
import Semantic from "../Images/semantic.png";
import React from "react";

const techStack = () => {
  return (
    <div>
      <p className="techStack">Tech Stack</p>
      <div>
        <div className="stack1">
          <div className="icon" style={{ animation: "fadeInUp 0.5s" }}>
            <React1 />
            <span> React</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 0.75s" }}>
            <Html />
            <span> HTML</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 1s" }}>
            <Css />
            <span> CSS</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 1.25s" }}>
            <Javascript />
            <span> Javascript</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 1.5s" }}>
            <Express />
            <span> Express.Js</span>
          </div>
        </div>
        <div className="stack1">
          <div className="icon" style={{ animation: "fadeInUp 1.75s" }}>
            <Database />
            <span> MYSQL</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 2s" }}>
            <Java />
            <span> Java</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 2.25s" }}>
            <Python />
            <span> Python</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 2.5s" }}>
            <Bootstrap />
            <span> Bootstrap</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 2.75s" }}>
            <img src={Tailwind} alt="tailwind" className="svgIcon" />
            <span> Tailwind CSS</span>
          </div>
        </div>
        <div className="stack1">
          <div className="icon" style={{ animation: "fadeInUp 3s" }}>
            <img src={Semantic} alt="semantic" className="svgIcon" />
            <span> Semantic UI</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 3.25s" }}>
            <Github />
            <span> GitHub</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 3.5s" }}>
            <Vscode />
            <span> VS Code</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 3.75s" }}>
            <Npm />
            <span> NPM</span>
          </div>
          <div className="icon" style={{ animation: "fadeInUp 4s" }}>
            <Yarn />
            <span> Yarn</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default techStack;
