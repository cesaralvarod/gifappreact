import React from "react";
import PropTypes from "prop-types";

// Styles

import "./GifGrid.css";

// Components

import GifGridItem from "./GifGridItem";
import Loading from "./Loading";

// Hook

import useFetchGif from "../hooks/useFetchGifs";

function GifGrid({ query }) {
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

GifGrid.propTypes = {
  query: PropTypes.string.isRequired,
};

export default GifGrid;
