import React from "react";
import Album from "./Album";
import { mount } from "enzyme";
import albumsData from "./albumsTest.json";
import {
  BrowserRouter as Router,
  MemoryRouter,
  Route,
  Switch,
} from "react-router-dom";

// check to see whether the user name prop is passed to component and displayed properly
describe("Name props should be passed to component correctly", () => {
  let wrapper = mount(
    <Router>
      <Album key="1" albumData={albumsData[0]} name="Uncle Sam" />
    </Router>
  );
  test("render the big title of this Album Viewer App", () => {
    expect(wrapper.contains("Uncle Sam")).toEqual(true);
  });
});
// check to see whether the album name is passed to component and displayed properly
describe("Name props should be passed to component correctly", () => {
  let wrapper = mount(
    <Router>
      <Album key="2" albumData={albumsData[0]} name="Uncle Sam" />
    </Router>
  );
  test("render the big title of this Album Viewer App", () => {
    expect(wrapper.contains("quidem molestiae enim")).toEqual(true);
  });
});
// Album component should generate only one Album tag
describe("The size of album should be 100 based on the Album data file", () => {
  let wrapper = mount(
    <Router>
      <Album key="3" albumData={albumsData[1]} name="Uncle Tom" />
    </Router>
  );
  test("render the big title of this Album Viewer App", () => {
    expect(wrapper.find("Album")).toHaveLength(1);
  });
});
// Snapshot Testing for Album component
describe("Album component snapshot testing", () => {
  test("matches the snapshot", () => {
    const component = mount(
      <Router>
        <Album key="3" albumData={albumsData[1]} name="Uncle Tom" />
      </Router>
    );
    expect(component.getElements()).toMatchSnapshot();
  });
});

// Click one of albums, the page should be redirected to the photo page
describe("Click the album, check the behaviour of the page", () => {
  const MockComp = () => <div className="target">Target</div>;
  const MockDenied = () => <div className="denied"> Denied</div>;

  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <div>
        <Album key="3" albumData={albumsData[1]} name="Uncle Tom" />
        <Switch>
          <Route exact path="/" component={MockDenied} />
          <Route exact path="/photo/:id" component={MockComp} />
        </Switch>
      </div>
    </MemoryRouter>
  );
  test("Click the album, it should redirect to photo page", () => {
    wrapper.find("a").simulate("click", { button: 0 });
    expect(wrapper.find(".target")).toHaveLength(1);
  });
});
