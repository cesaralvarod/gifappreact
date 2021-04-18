import React from "react";

// Styles

import "./SearchInput.css";

function SearchInput(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    props.handleQuery(e.target.value);
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
          onInput={handleInputChange}
        />
      </form>
    </>
  );
}

export default SearchInput;
