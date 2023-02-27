function Image({ path, alt = "" }) {
  // todo: normalise path by removing './' and '/'
  try {
    const image = require(`../assets/${path}`);
    if (!image) return null;
    return (
      <img
        src={image}
        alt={alt}
        width="600"
        height="400"
        style={{ width: "100%", height: "auto" }}
      />
    );
  } catch (error) {
    console.error(`Image with path ${path} couldn't be found!`);
  }
}

export default Image;
