import React, { useEffect, useState } from "react";

// Styles

import "./GifGrid.css";

// Components

import GifGridItem from "./GifGridItem";
import Loading from "./Loading";

// Helpers

import getGIF from "../helpers/getGIF";

function GifGrid(props) {
  const [isLoading, setIsLoading] = useState(true);

  const [images, setImages] = useState([]);

  const query = props.query;

  useEffect(() => {
    getGIF(query)
      .then((imgs) => {
        setImages(imgs);
        setIsLoading(false);
      })
      .catch((err) => console.error("Oh no!"));
  }, [query]);

  return (
    <div className="list-items">
      {isLoading ? <Loading /> : null}
      <ul>
        {images.map((img, index) => {
          return <GifGridItem image={img} />;
        })}
      </ul>
    </div>
  );
}

export default GifGrid;
