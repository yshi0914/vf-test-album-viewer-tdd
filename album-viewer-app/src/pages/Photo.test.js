import React from "react";
import Photo from "./Photo";
import { shallow, mount } from "enzyme";
// Pass the url params and the album id into photo component
// Check if the album name is displayed correctly
describe("Photo component after mounting", () => {
  let wrapper;
  test("render the album name of this photo component", () => {
    wrapper = mount(
      <Photo
        match={{ params: { id: 1 } }}
        location={{ search: { albumName: "A Great Album Name" } }}
      />
    );
    expect(wrapper.find("h1").text()).toContain("A Great Album Name");
  });
});

// Snapshot Testing for Photo component
describe("AlbumList component snapshot testing", () => {
  test("matches the snapshot", () => {
    const component = shallow(
      <Photo
        match={{ params: { id: 1 } }}
        location={{ search: { albumName: "A Great Album Name" } }}
      />
    );
    expect(component.getElements()).toMatchSnapshot();
  });
});
