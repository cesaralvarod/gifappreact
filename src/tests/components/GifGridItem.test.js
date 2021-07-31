import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Testing in GifGridItem.js", () => {
  let dataParams = {
    id: "23231928",
    title: "Title",
    url: "https://example.com",
  };

  const wrapper = shallow(<GifGridItem {...dataParams} />);

  test("Component <GifGridItem /> should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Component <GifGridItem /> should have a tag <p> as title", () => {
    const title = wrapper.find("p");

    expect(title.text().trim()).toBe(dataParams.title);
  });

  test("Component <GifGridItem /> should have an <image> with url and alt params same to dataParams", () => {
    const img = wrapper.find("img");

    expect(img.props().src).toBe(dataParams.url);

    expect(img.props().alt).toBe(dataParams.title);
  });
});
