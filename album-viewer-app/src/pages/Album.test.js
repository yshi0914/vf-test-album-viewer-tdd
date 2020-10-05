import React from "react";
import Album from "./Album";
import { shallow } from "enzyme";
describe("Album component after mounting", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Album />);
  });
  test("render the big title of this Album Viewer App", () => {
    expect(wrapper.find("h1").text()).toContain(
      "All albums with its associated User Name"
    );
  });
});

