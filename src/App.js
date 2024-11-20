import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";

function Header() {
  return (
    <header className="p-5">
      <h1 className="text-center mb-0">Charlane Yu</h1>
      <p className="text-center font-thin">
        Asian Makeup Artist & Hairstylist Düsseldorf 
      </p>
    </header>
  );
}

function Nav() {
  return (
    <nav className="flex flex-row flex-wrap justify-center border-2 border-l-0 border-r-0 min-h-full pt-3 pb-3">
      <NavLink className="px-4 inline-block" to="/">
        Home
      </NavLink>
      <NavLink className="px-4 inline-block" to="/about">
        About
      </NavLink>
      <NavLink className="px-4 inline-block" to="/gallery">
        Gallery
      </NavLink>
      <NavLink
        className="px-4 inline-block"
        to="/destinations-weddings-photoshoots"
      >
        Destinations
      </NavLink>
      <NavLink className="px-4 inline-block" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

function Footer() {
  return (
    <div className="container-full text-center bg-slate-100 py-6">
      <a className="px-3" href="https://www.facebook.com/makeupcharlaneyu/">
        Facebook
      </a>
      <a className="px-3" href="https://www.instagram.com/charlane_yu/">
        Instagram
      </a>
      <p className="text-sm mt-3 text-stone-500">
        Copyright 2024 Charlane Yu | Designed by Nick Ang
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* wrapper to enable sticky footer */}
      <div className="flex-1">
        <Header />
        <Nav />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/destinations-weddings-photoshoots"
            element={<Destinations />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
