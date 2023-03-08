import assets from "../assets/assets.json";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const MAX_IMAGES_TO_SHOW = 30;
const FOLDER_NAME = "destinations";

const images = assets[FOLDER_NAME].slice(0, MAX_IMAGES_TO_SHOW - 1).map(
  (file) => {
    const img = require(`../assets/${FOLDER_NAME}/${file.name}`);
    return {
      original: img,
      thumbnail: img,
      load: "lazy",
    };
  }
);

function Destinations() {
  return (
    <div className="container px-3 sm:px-12 lg:px-48 md:px-28 py-3 lg:py-10">
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
        additionalClass="image-gallery-landscape"
      />
    </div>
  );
}

export default Destinations;
