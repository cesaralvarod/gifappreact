import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test in <GifGridItem />", () => {
  const id = "12312";

  const title = "A title";

  const url = "https://localhost.com";

  const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />);

  test("Should show correctly the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should have one <p> tag with the title", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("Should have one <img> tag with attributes src and alt", () => {
    const img = wrapper.find("img");

    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test("Should be className 'item'", () => {
    expect(wrapper.props().className).toBe("item");
  });
});
