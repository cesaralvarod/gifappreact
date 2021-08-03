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
  const { data: images, loading } = useFetchGif(query);

  return (
    <div className="list-items">
      {loading ? <Loading /> : null}
      <ul>
        {images.map((img) => {
          return (
            <GifGridItem
              key={img.id}
              id={img.id}
              title={img.title}
              url={img.url}
            />
          );
        })}
      </ul>
    </div>
  );
}

GifGrid.propTypes = {
  query: PropTypes.string.isRequired,
};

export default GifGrid;
