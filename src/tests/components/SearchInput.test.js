import React from "react";
import { shallow } from "enzyme";
import SearchInput from "../../components/SearchInput";

describe("Test in <SearchInput />", () => {
  const functionComprobate = jest.fn();

  let wrapper = shallow(<SearchInput handleQuery={functionComprobate} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<SearchInput handleQuery={functionComprobate} />);
  });

  test("Should be true", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should change textbox content", () => {
    const input = wrapper.find("input");
    const value = "Hello world";
    input.simulate("change", { target: { value } });
  });

  test("Shouldn't post submit info", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(functionComprobate).toHaveBeenCalled();
  });
});
