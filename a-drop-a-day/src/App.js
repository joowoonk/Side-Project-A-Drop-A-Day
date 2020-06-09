import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Nav from "./components/nav/nav.component";
import SignIn from "./components/sign-in/sign-in.component";
import Quotes from "./components/Quotes/quotes";
import SignUp from "./components/sign-up/sign-up.component";
import SideNav from "./components/side-nav/side-nav.component";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/SignIn">
          <Quotes />
          <SignIn />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <PrivateRoute exact path="/tomatoes">
          <Quotes />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
