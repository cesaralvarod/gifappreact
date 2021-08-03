import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGif from "../../hooks/useFetchGifs";

// mock sirve para fingir culaquier llamada a ese archivo y suponer o controlar
// la informacion que eso va a responder
jest.mock("../../hooks/useFetchGifs");

describe("Testing in GifGrid.js", () => {
  const query = "Breaking bad";

  test("Component <GifGrid /> should show correctly", () => {
    const initUseFetchGif = { data: [], loading: true };

    useFetchGif.mockReturnValue(initUseFetchGif);

    let wrapper = shallow(<GifGrid query={query} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Component <GifGrid /> should show items when images are loaded", () => {
    let gifs = [
      {
        id: "12312sa",
        url: "https://gifurl.com",
        title: "GIF",
      },
    ];

    let expectedUseFetchGif = {
      data: gifs,
      loading: false,
    };

    useFetchGif.mockReturnValue(expectedUseFetchGif);

    const wrapper = shallow(<GifGrid query={query} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Loading").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
