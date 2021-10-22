import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import NavButton from "./components/NavButton";
import TransparentNavButton from "./components/TransparentNavButton";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
  return (
    <div>
      <div className="md:h-screen bg-gradient-to-r from-indigo-400 to-indigo-700">
        <h1 className="text-center text-3xl md:text-4xl pt-20 font-italic text-white">
          <Link to="/">
            <TransparentNavButton buttonText="Siddharth (Drac)" />
          </Link>
        </h1>
        <div className="pt-14 flex flex-wrap text-1xl md:text-2xl justify-center pl-16 pr-16 space-x-4 space-y-1 md:space-y-0 pb-14">
          <Link to="/" strict>
            <NavButton buttonText="About Me" color="pink" />
          </Link>
          <Link to="/contact">
            <NavButton buttonText="Contact" color="pink" />
          </Link>
          <Link to="/blog">
            <NavButton buttonText="Blog" color="pink" />
          </Link>
          <a href="https://github.com/DracTheDino/" target="_blank">
            <NavButton buttonText="GitHub" color="pink" />
          </a>
        </div>
        <Switch>
          <Route path="/contact" component={Contact} strict />
          <Route path="/blog" component={Blog} strict />
          <Route path="/" component={About} strict />
        </Switch>
        <br></br>
      </div>
    </div>
  );
}

export default App;
