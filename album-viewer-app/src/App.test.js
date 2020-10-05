import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";

describe("App component after mounting", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test("render the big title of this Album Viewer App", () => {
    expect(wrapper.find("h1").text()).toContain(
      "All albums with its associated User Name"
    );
  });
});

describe("App component snapshot testing", () => {
  test("matches the snapshot", () => {
    const component = shallow(<App />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
