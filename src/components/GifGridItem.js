import React from "react";
import PropTypes from "prop-types";

// Styles

import "./GifGridItem.css";

function GifGridItem({ id, title, url }) {
  return (
    <li key={id} className="item">
      <img src={url} alt={title} />
      <p>{title}</p>
    </li>
  );
}

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
