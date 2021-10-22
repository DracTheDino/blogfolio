import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import NavButton from "./components/NavButton";
import TransparentNavButton from "./components/TransparentNavButton";

function App() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-indigo-400 to-indigo-700">
        <h1 className="text-center text-3xl md:text-4xl pt-20 font-italic text-white">
          <Link to="/">
            <TransparentNavButton buttonText="Siddharth (Drac)" />
          </Link>
        </h1>
        <div className="pt-14 flex flex-wrap text-1xl md:text-2xl justify-center pl-16 pr-16 space-x-4 pb-14">
          <NavButton buttonText="About Me" color="pink" />
          <Link to="/contact">
            <NavButton buttonText="Contact" color="pink" />
          </Link>
          <NavButton buttonText="Blog" color="pink" />
          <NavButton buttonText="GitHub" color="pink" />
        </div>
        <Switch>
          <Route path="/contact" component={Contact} strict />
          <Route path="/" strict />
        </Switch>
      </div>
    </div>
  );
}

export default App;
