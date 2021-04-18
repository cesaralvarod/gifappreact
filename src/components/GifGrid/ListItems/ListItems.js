import React, { useEffect, useState } from "react";

// Styles

import "./ListItems.css";

// Components

import Item from "../Item/Item";

function ListItems(props) {
  const [images, setImages] = useState([]);

  const query = props.query;

  useEffect(() => {
    getGIF(query);
  });

  let key = "KJszTsi2zXgt4p0xqIySIFQWko09pUfk";

  const getGIF = async (query) => {
    setImages([]);
    let url;
    if (query !== "") {
      url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(
        query
      )}&limit=25&offset=0&rating=g&lang=en`;
    } else {
      url = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=25&rating=g`;
    }
    const resp = await fetch(url);

    const { data } = await resp.json();

    let gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

  return (
    <div className="list-items">
      <ul>
        {images.map((img, index) => {
          return <Item image={img} />;
        })}
      </ul>
    </div>
  );
}

export default ListItems;
