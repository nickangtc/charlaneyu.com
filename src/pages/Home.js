import assets from "../assets/assets.json";
import Image from "../components/Image";
import Slideshow from "../components/Slideshow";

function Home() {
  const MAX_IMAGES_TO_SHOW = 8;
  const FOLDER_NAME = "home";

  const images = assets[FOLDER_NAME].slice(0, MAX_IMAGES_TO_SHOW - 1).map(
    (file, index) => {
      return (
        <Image
          path={`${FOLDER_NAME}/${file.name}`}
          key={index}
          className="w-full"
        />
      );
    }
  );

  return (
    <div className="container px-3 sm:px-12 lg:px-60 md:px-28 py-3 lg:py-10">
      <p className="text-center text-md my-5">
        <em>
          This site is under active construction. Please bear with me as I get
          it into shape!
        </em>
      </p>
      <Slideshow>{images}</Slideshow>
      <p className="text-center text-3xl mb-5 italic font-serif">
        Love of beauty is taste. The creation of beauty is art.
      </p>
      <p className="text-center text-lg mb-10">Ralph Waldo Emerson</p>
    </div>
  );
}

export default Home;
