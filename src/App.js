import "./App.css";
import Navigation from "./console/navHeader";
import Home from "./console/home";
import About from "./console/about";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
    </div>
  );
};

export default App;
