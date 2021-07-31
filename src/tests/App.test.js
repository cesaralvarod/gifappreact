/*
 * Enzyme, Enzyme to json
 * */

import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("Testing in App.js", () => {
  test("Component <App/> should show correctly", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
