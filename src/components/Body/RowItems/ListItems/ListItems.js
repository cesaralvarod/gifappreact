import React from "react";

// Styles

import "./ListItems.css";

// Components

import Item from "../Item/Item";

function ListItems() {
  return (
    <div className="list-items">
      <CategoryItems catTitle="Hola mundo" />
      <ul>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  );
}

// Component CategoryItems

function CategoryItems(props) {
  const catTitle = props.catTitle;

  return <h4>{catTitle}</h4>;
}

export default ListItems;
