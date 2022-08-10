import "./App.css";

function App() {
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
      <div className="flex justify-center pt-10 pb-10">
        <blockquote>
          Love of beauty is taste. The creation of beauty is art.
        </blockquote>
        <p className="text-sm">Ralph Waldo Emerson</p>
      </div>
    </div>
  );
}

export default App;
