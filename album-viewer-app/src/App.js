import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Album from "./pages/Album";
import Photo from "./pages/Photo";
import FullPhoto from "./pages/FullPhoto";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Album} />
          <Route exact path="/photo/:id" component={Photo} />
          <Route path="/photo/full/:id" component={FullPhoto} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
