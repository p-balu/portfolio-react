import "./App.css";
import Navigation from "./console/navHeader";
import Home from "./console/home";
import About from "./console/about";
import React from "react";

// import Education from "./console/education";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      {/* <Education /> */}
    </div>
  );
};

export default App;
