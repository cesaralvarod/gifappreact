import React from "react";

// Styles

import "./SearchInput.css";

function SearchInput() {
  return (
    <>
      <input
        type="text"
        className="input-search"
        name="q"
        id="query"
        placeholder="Search a gif"
        autoComplete="off"
      />
    </>
  );
}

export default SearchInput;
