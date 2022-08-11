import React from "react";
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

function App() {
  const numberOfImagesOnInitialPageLoad = 2;
  const [lastLoadedImageIndex, setLastLoadedImageIndex] = React.useState(
    numberOfImagesOnInitialPageLoad - 1
  );

  const images = assets["front-page-images"]
    .slice(0, lastLoadedImageIndex)
    .map((file, index) => {
      return <Image path={`front-page-images/${file.name}`} key={index} />;
    });

  function appendNewImage() {
    setLastLoadedImageIndex(lastLoadedImageIndex + 1);
  }

  return (
    <div>
      <header className="p-5">
        <h1 className="text-3xl text-center font-serif">Charlane Yu</h1>
        <p className="text-center font-thin">Makeup & Hairstyling Berlin</p>
      </header>

      <nav className="flex flex-row justify-center border-2 border-l-0 border-r-0 min-h-full pt-3 pb-3">
        <ul className="flex flex-row justify-around">
          <li className="px-5 inline-block">Home</li>
          <li className="px-5 inline-block">Blog</li>
          <li className="px-5 inline-block">About</li>
          <li className="px-5 inline-block">Gallery (v)</li>
          <li className="px-5 inline-block">Destinations</li>
          <li className="px-5 inline-block">Contact</li>
        </ul>
      </nav>

      <div className="flex justify-center pt-10 pb-10">
        <p>AUTO SCROLL PHOTO GALLERY HERE</p>
      </div>

      <figure className="text-center">
        <blockquote>
          <p>Love of beauty is taste. The creation of beauty is art.</p>
        </blockquote>
        <cite className="text-sm">Ralph Waldo Emerson</cite>
      </figure>

      <button onClick={appendNewImage} className="rounded-full bg-blue-300">
        Append new image
      </button>

      {images}
    </div>
  );
}

export default App;
