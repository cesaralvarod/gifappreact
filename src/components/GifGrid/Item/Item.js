import React from "react";

// Styles

import "./Item.css";

function Item(props) {
  const { id, title, url } = props.image;

  return (
    <li key={id} className="item">
      <img src={url} alt={title} />
      <p>{title}</p>
    </li>
  );
}

export default Item;
