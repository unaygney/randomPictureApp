import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import searchImages from "./api";
import ImageList from './components/ImageLıst'

function App() {
  const [images, setImages] = useState([]);
  const handleSearch = async (text) => {
    const result = await searchImages(text);
    setImages(result);
  };

  return (
    <div className="container">
      <Header search={handleSearch} />
      <ImageList imagePlaceHolder = {images} />
    </div>
  );
}

export default App;
