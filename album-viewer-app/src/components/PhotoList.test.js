import React from "react";
import PhotoList from "./PhotoList";
import { shallow, mount } from "enzyme";
import photosData from "./photosTest.json";
import { BrowserRouter as Router } from "react-router-dom";
// All the photos from the target album should be put under one <div> tag
describe("The number of album list to be rendered should be one", () => {
  let wrapper = mount(
    <Router>
      <PhotoList data={photosData} />
    </Router>
  );
  test("render the big title of this Album Viewer App", () => {
    expect(wrapper.find("#photolist")).toHaveLength(1);
  });
});

// since there are 50 photos in the given photos file, the number of <ThumbnailPhoto> tag should be 50
describe("The number of album list to be rendered should be one", () => {
  let wrapper = mount(
    <Router>
      <PhotoList data={photosData} />
    </Router>
  );
  test("check the number of photos loaded into the page", () => {
    expect(wrapper.find("ThumbnailPhoto")).toHaveLength(50);
  });
});

// Title name of one of those testing photos: 'natus doloribus necessitatibus ipsa'
describe("the title name should be rendered correctly", () => {
  let wrapper = mount(
    <Router>
      <PhotoList data={photosData} />
    </Router>
  );
  test("check whether the title name is correctly displayed", () => {
    expect(wrapper.contains("natus doloribus necessitatibus ipsa")).toEqual(
      true
    );
  });
});

// Snapshot Testing for PhotoList component
describe("PhotoList component snapshot testing", () => {
  test("matches the snapshot", () => {
    const component = shallow(
      <Router>
        <PhotoList data={photosData[0]} />
      </Router>
    );
    expect(component.getElements()).toMatchSnapshot();
  });
});
