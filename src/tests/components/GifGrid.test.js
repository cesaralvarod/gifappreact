import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGif from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Test <GifGrid />", () => {
  test("Should show correctly", () => {
    useFetchGif.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid query="goku" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should show items when images be loaded", () => {
    const gifs = [
      {
        id: "abc",
        url: "https://localhost.com",
        title: "abc",
      },
    ];

    useFetchGif.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid query="goku" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Loading").length).toBe(0);
  });
});
