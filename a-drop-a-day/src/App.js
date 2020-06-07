import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Nav from "./components/nav/nav.component";
import Form from "./components/form/form.component";
import Quotes from "./components/Quotes/quotes";

import SideNav from "./components/side-nav/side-nav.component";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Quotes />
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
