import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import "./index.scss";
import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";

import thunk from "redux-thunk";

import rootReducer from "./redux/reducers";

import { Provider } from "react-redux";
export const history = createBrowserHistory();
const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  rootElement
);
