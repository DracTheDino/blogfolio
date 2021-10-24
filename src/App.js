import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Contact from "./components/Contact";
import NavButton from "./components/NavButton";
import TransparentNavButton from "./components/TransparentNavButton";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer"
import Projects from "./components/Projects";

function App() {
    return (
        <div className="select-none">
            <div className="md:h-screen bg-gradient-to-tl from-indigo-400 via-indigo-500 to-indigo-600">
                <h1 className="text-center text-3xl md:text-4xl pt-20 font-italic text-white">
                    <Link to="/">
                        <TransparentNavButton buttonText="Siddharth (Drac)"/>
                    </Link>
                </h1>
                <div
                    className="pt-14 flex flex-wrap text-1xl md:text-2xl justify-center pl-16 pr-16 space-x-4 space-y-1 md:space-y-0 pb-14">
                    <Link to="/" strict>
                        <NavButton buttonText="About Me" color="pink"/>
                    </Link>
                    <Link to="/projects" strict>
                        <NavButton buttonText="Projects" color="pink"/>
                    </Link>
                    <Link to="/contact">
                        <NavButton buttonText="Contact" color="pink"/>
                    </Link>
                    <Link to="/blog">
                        <NavButton buttonText="Blog" color="pink"/>
                    </Link>
                    <a
                        href="https://github.com/DracTheDino/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavButton buttonText="GitHub" color="pink"/>
                    </a>
                </div>
                <Switch>
                    <Route path="/contact" component={Contact} strict/>
                    <Route path="/blog" component={Blog} strict/>
                    <Route path="/projects" component={Projects} strict />
                    <Route path="/" component={About} strict/>
                </Switch>
                <br />
            </div>
            <Footer />
        </div>
    );
}

export default App;
