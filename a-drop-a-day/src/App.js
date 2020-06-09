import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Nav from "./components/nav/nav.component";
import SignIn from "./components/sign-in/sign-in.component";
import Quotes from "./components/Quotes/quotes";

import SideNav from "./components/side-nav/side-nav.component";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Quotes />
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
