import assets from "../assets/assets.json";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";

const MAX_IMAGES_TO_SHOW = 100;
const FOLDER_NAME = "gallery";

const images = assets[FOLDER_NAME].slice(0, MAX_IMAGES_TO_SHOW - 1).map(
  (file) => {
    const img = require(`../assets/${FOLDER_NAME}/${file.name}`);
    return {
      original: img,
      thumbnail: img,
      loading: "lazy",
    };
  }
);

// TODO: Fix sizes to be smaller than viewport height for better viewing experience
function Gallery() {
  return (
    <div className="container px-3 sm:px-12 lg:px-60 md:px-28 py-3 lg:py-10">
      <ImageGallery
        items={images}
        infinite={true}
        lazyLoad={true}
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={true}
        showBullets={false}
        showThumbnails={true}
        useWindowKeyDown={true}
        additionalClass="image-gallery-portrait"
      />
    </div>
  );
}

export default Gallery;
