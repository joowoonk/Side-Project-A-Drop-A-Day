import React from "react";
import { Route, Switch } from "react-router";

// import { GlobalStyles } from "./components/globalStyles";
// import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";

import Nav from "./components/nav/nav.component";
import SignIn from "./components/sign-in/sign-in.component";
import Quotes from "./components/Quotes/quotes";
import SignUp from "./components/sign-up/sign-up.component";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import JourneyPage from "./pages/journey-page/Journey-Page.component";
import SubjectForm from "./components/subject-form/subject-form.component";

function App() {
  return (
    // <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
    <>
      {/* <GlobalStyles /> */}

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
          <PrivateRoute path="/tomatoes">
            <JourneyPage />
          </PrivateRoute>
          <PrivateRoute path="/form">
            <SubjectForm />
          </PrivateRoute>{" "}
        </Switch>
      </div>
    </>
    // </ThemeProvider>
  );
}

export default App;
