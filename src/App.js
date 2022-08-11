import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import assets from "./assets/assets.json";

function Image({ path }) {
  // todo: normalise path by removing './' and '/'
  try {
    const image = require(`./assets/${path}`);
    if (!image) return null;
    return <img src={image} alt={image} />;
  } catch (error) {
    console.error(`Image with path ${path} couldn't be found!`);
  }
}

function Slideshow({ children }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(nextIndex());
    }, 2000);
    return () => clearInterval(intervalRef.current);
  });

  function handleClickToNextImage() {
    clearInterval(intervalRef.current);
    setCurrentIndex(nextIndex());
  }

  function nextIndex() {
    return currentIndex + 1 === children.length ? 0 : currentIndex + 1;
  }

  return (
    // todo: min height needs to stay consistent to prevent jumpy UI when images have different dimensions
    <div
      className="container max-w-5xl mt-10 mb-10 h-auto"
      onClick={handleClickToNextImage}
    >
      {children[currentIndex]}
    </div>
  );
}

function App() {
  return (
    <div>
      <header className="p-5">
        <h1 className="text-3xl text-center font-serif">Charlane Yu</h1>
        <p className="text-center font-thin">Makeup & Hairstyling Berlin</p>
      </header>

      <nav className="flex flex-row justify-center border-2 border-l-0 border-r-0 min-h-full pt-3 pb-3">
        <Link className="px-5 inline-block" to="/">
          Home
        </Link>
        <Link className="px-5 inline-block" to="/blog">
          Blog
        </Link>
        <Link className="px-5 inline-block" to="/about">
          About
        </Link>
        <Link className="px-5 inline-block" to="/gallery">
          Gallery (v)
        </Link>
        <Link
          className="px-5 inline-block"
          to="/destinations-weddings-photoshoots"
        >
          Destinations
        </Link>
        <Link className="px-5 inline-block" to="/contact">
          Contact
        </Link>
      </nav>

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
  );
}

function Home() {
  const MAX_IMAGES_TO_SHOW = 8;
  const FOLDER_NAME = "front-page-images";

  const images = assets[FOLDER_NAME].slice(0, MAX_IMAGES_TO_SHOW - 1).map(
    (file, index) => {
      return (
        <Image
          path={`front-page-images/${file.name}`}
          key={index}
          className="w-full"
        />
      );
    }
  );

  return (
    <>
      <Slideshow>{images}</Slideshow>
      <p className="text-center text-3xl mb-5 italic font-serif">
        Love of beauty is taste. The creation of beauty is art.
      </p>
      <p className="text-center text-lg mb-10">Ralph Waldo Emerson</p>
    </>
  );
}

function About() {
  return <p>ABOUT TO COME</p>;
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
