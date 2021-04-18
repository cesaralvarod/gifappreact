import React from "react";

// Components

import ListItems from "./ListItems/ListItems";

function GifGrid(props) {
  return (
    <div className="content">
      <p>Resultados de la busqueda {props.query}</p>
      <ListItems query={props.query} />
    </div>
  );
}

export default GifGrid;
