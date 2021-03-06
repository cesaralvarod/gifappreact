import React from "react";
import { shallow } from "enzyme";
import SearchInput from "../../components/SearchInput";

describe("Testing in SearchInput.js", () => {
  // let funcParam = () => {};
  let handleQuery = jest.fn();

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock or simulation for something

    wrapper = shallow(<SearchInput handleQuery={handleQuery} />);
  });

  test("Component <SearchInput /> should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Simulate input event from component <Searchinput />", () => {
    const value = "Rick and Morty";

    wrapper
      .find("input")
      .simulate("change", { target: { value } } /* this is my event */);

    expect(wrapper.find("input").props().value).toBe(value);
  });

  test("Shouldn't post info when form is submit", () => {
    const form = wrapper.find("form");

    form.simulate("submit", { preventDefault() {} });

    expect(handleQuery).not.toHaveBeenCalled();
  });

  test("Should call handleQuery() and clean input text", () => {
    const value = "Rick and Morty";

    wrapper.find("input").simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(handleQuery).toHaveBeenCalled();
  });
});
