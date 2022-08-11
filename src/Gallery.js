// ! This is copy-pasted from the POC when developing the front page
// ! but is a good reference for Gallery page

import React from "react";
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

function Gallery() {
  const numberOfImagesOnInitialPageLoad = 2;
  const [lastLoadedImageIndex, setLastLoadedImageIndex] = React.useState(
    numberOfImagesOnInitialPageLoad - 1
  );

  const images = assets["home"]
    .slice(0, lastLoadedImageIndex)
    .map((file, index) => {
      return <Image path={`home/${file.name}`} key={index} />;
    });

  function appendNewImage() {
    // remember to guard against index > total number of images
    setLastLoadedImageIndex(lastLoadedImageIndex + 1);
  }

  return (
    <div>
      <button onClick={appendNewImage} className="rounded-full bg-blue-300">
        Append new image
      </button>
      {images}
    </div>
  );
}

export default Gallery;
