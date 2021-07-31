import React, { useState } from "react";

// Styles

import "./App.css";

// Component

import SearchInput from "./components/SearchInput";
import GifGrid from "./components/GifGrid";

const App = () => {
  const [query, setQuery] = useState("");

  const handleQuery = (value) => {
    setQuery(value);
  };

  return (
    <div className="container">
      <h1>Gif App React</h1>
      <SearchInput handleQuery={handleQuery} />
      <div className="content">
        <GifGrid query={query} />
      </div>
    </div>
  );
};

export default App;
