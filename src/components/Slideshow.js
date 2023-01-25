import React, { useEffect } from "react";

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

export default Slideshow;
