let key = "KJszTsi2zXgt4p0xqIySIFQWko09pUfk";

const getGIF = async (query) => {
  if (query == "") {
    query = "trending";
  }
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(
    query
  )}&limit=16&offset=0&rating=g&lang=en`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

export default getGIF;
