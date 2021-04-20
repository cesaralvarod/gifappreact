import React, { useState } from "react";

// Styles

import "./SearchInput.css";

function SearchInput(props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleQuery(query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-search"
          name="q"
          id="query"
          placeholder="Search a gif"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </form>
    </>
  );
}

export default SearchInput;
