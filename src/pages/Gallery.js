import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function Gallery() {
  return (
    <div className="container px-40 py-10">
      <p className="text-center">Coming soon!</p>
    </div>
  );
  // return (
  //   <div className="container px-3 sm:px-12 lg:px-36 py-3 lg:py-10">
  //     <ImageGallery
  //       items={images}
  //       infinite={true}
  //       lazyLoad={true}
  //       showNav={false}
  //       showPlayButton={false}
  //       showFullscreenButton={true}
  //       showBullets={false}
  //       showThumbnails={true}
  //       useWindowKeyDown={true}
  //     />
  //   </div>
  // );
}

export default Gallery;
