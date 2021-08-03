/*
 * Enzyme, Enzyme to json
 * */

import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("Testing in App.js", () => {
  const wrapper = shallow(<App />);

  test("Component <App/> should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Component <App /> should show component <SearchInput />", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("SearchInput").exists()).toBe(true);
  });

  test("Component <App /> should show component <GifGrid />", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").exists()).toBe(true);
  });
});
