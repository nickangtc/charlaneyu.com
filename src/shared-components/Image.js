function Image({ path }) {
  // todo: normalise path by removing './' and '/'
  try {
    const image = require(`../assets/${path}`);
    if (!image) return null;
    return <img src={image} alt={image} />;
  } catch (error) {
    console.error(`Image with path ${path} couldn't be found!`);
  }
}

export default Image;
