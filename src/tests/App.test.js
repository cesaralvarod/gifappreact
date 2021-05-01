import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import App from "../App";

describe("Test <App />", () => {
  test("Should show component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
