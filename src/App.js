import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import assets from "./assets/assets.json";
import About from "./About";
import Image from "./components/Image";
import Slideshow from "./components/Slideshow";

function Header() {
  return (
    <header className="p-5">
      <h1 className="text-center mb-0">Charlane Yu</h1>
      <p className="text-center font-thin">Makeup & Hairstyling Berlin</p>
    </header>
  );
}

function Nav() {
  return (
    <nav className="flex flex-row justify-center border-2 border-l-0 border-r-0 min-h-full pt-3 pb-3">
      <NavLink className="px-5 inline-block" to="/">
        Home
      </NavLink>
      <NavLink className="px-5 inline-block" to="/blog">
        Blog
      </NavLink>
      <NavLink className="px-5 inline-block" to="/about">
        About
      </NavLink>
      <NavLink className="px-5 inline-block" to="/gallery">
        Gallery (v)
      </NavLink>
      <NavLink
        className="px-5 inline-block"
        to="/destinations-weddings-photoshoots"
      >
        Destinations
      </NavLink>
      <NavLink className="px-5 inline-block" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

function Footer() {
  return (
    <div className="container-full text-center bg-slate-100 py-6">
      <a className="px-3" href="https://www.facebook.com/makeupcharlaneyu/">
        FacebookLogo
      </a>
      <a className="px-3" href="https://www.instagram.com/charlane_yu/">
        IGLogo
      </a>
      <p className="text-sm mt-3 text-stone-500">
        Copyright 2022 Charlane Yu | Designed by Nick Ang
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
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route
            path="destinations-weddings-photoshoots"
            element={<Destinations />}
          />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function Home() {
  const MAX_IMAGES_TO_SHOW = 8;
  const FOLDER_NAME = "home";

  const images = assets[FOLDER_NAME].slice(0, MAX_IMAGES_TO_SHOW - 1).map(
    (file, index) => {
      return (
        <Image path={`home/${file.name}`} key={index} className="w-full" />
      );
    }
  );

  return (
    <div className="container pl-4 pr-4">
      <Slideshow>{images}</Slideshow>
      <p className="text-center text-3xl mb-5 italic font-serif">
        Love of beauty is taste. The creation of beauty is art.
      </p>
      <p className="text-center text-lg mb-10">Ralph Waldo Emerson</p>
    </div>
  );
}

function Contact() {
  return <p>Contact form</p>;
}

function Blog() {
  return <p>Markdown files converted to HTML?</p>;
}

function Destinations() {
  return <p>Oh this one has a dropdown menu... what to show here?</p>;
}

function Gallery() {
  return <p>Gallery of photos!</p>;
}

export default App;
