import { useState, useEffect } from "react";

// helpers

import getGIF from "../helpers/getGIF";

function useFetchGif(query) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGIF(query)
      .then((imgs) => {
        setState({
          data: imgs,
          loading: false,
        });
      })
      .catch((err) => console.error("Oh no!"));
  }, [query]);

  return state;
}

export default useFetchGif;
