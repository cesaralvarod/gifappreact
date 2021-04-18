import React, { useState } from "react";

// Styles

import "./App.css";

// Component

import SearchInput from "./components/SearchInput/SearchInput";
import GifGrid from "./components/GifGrid/GifGrid";

function App() {
  const [query, setQuery] = useState("");

  const handleQuery = (value) => {
    setQuery(value);
  };

  console.log(query);

  return (
    <div className="container">
      <h1>Gif App React</h1>
      <SearchInput handleQuery={handleQuery} />
      <GifGrid query={query} />
    </div>
  );
}

export default App;
