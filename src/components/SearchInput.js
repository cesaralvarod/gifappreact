import React, { useState } from "react";
import PropTypes from "prop-types";

// Styles

import "./SearchInput.css";

const SearchInput = ({ handleQuery }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query !== "") {
      handleQuery(query);
    }
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
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

SearchInput.propTypes = {
  handleQuery: PropTypes.func.isRequired,
};

export default SearchInput;
