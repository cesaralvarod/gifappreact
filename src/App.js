import React from "react";

// Styles

import "./App.css";

// Component

import SearchInput from "./components/SearchInput/SearchInput";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="container">
      <h1>Gif App React</h1>
      <SearchInput />
      <Body />
    </div>
  );
}

export default App;
