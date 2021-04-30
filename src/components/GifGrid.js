import React from "react";

// Styles

import "./GifGrid.css";

// Components

import GifGridItem from "./GifGridItem";
import Loading from "./Loading";

// Hook

import useFetchGif from "../hooks/useFetchGifs";

function GifGrid(props) {
  const query = props.query;

  const state = useFetchGif(query);

  const images = state.data;

  const isLoading = state.loading;

  return (
    <div className="list-items">
      {isLoading ? <Loading /> : null}
      <ul>
        {images.map((img, index) => {
          return <GifGridItem id={img.id} title={img.title} url={img.url} />;
        })}
      </ul>
    </div>
  );
}

export default GifGrid;
