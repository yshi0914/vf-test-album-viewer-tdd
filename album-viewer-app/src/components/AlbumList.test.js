import React from "react";
import AlbumList from "./AlbumList";
import { shallow, mount } from "enzyme";
import albumsData from "./albumsTest.json";
import usersData from "./usersTest.json";
import { BrowserRouter as Router } from "react-router-dom";
describe("The number of album list to be rendered should be one", () => {
  let wrapper = mount(
    <Router>
      <AlbumList albumsData={albumsData} usersData={usersData} />
    </Router>
  );
  test("render the big title of this Album Viewer App", () => {
    expect(wrapper.find("#albumList")).toHaveLength(1);
  });
});
// since the size of all albums is 100, the number of <Album> tag should be 100
describe("The size of album should be 100 based on the Album data file", () => {
  let wrapper = mount(
    <Router>
      <AlbumList albumsData={albumsData} usersData={usersData} />
    </Router>
  );
  test("render the big title of this Album Viewer App", () => {
    expect(wrapper.find("Album")).toHaveLength(100);
  });
});

// Snapshot Testing for AlbumList component
describe("AlbumList component snapshot testing", () => {
  test("matches the snapshot", () => {
    const component = shallow(
      <Router>
        <AlbumList albumsData={albumsData} usersData={usersData} />
      </Router>
    );
    expect(component.getElements()).toMatchSnapshot();
  });
});
