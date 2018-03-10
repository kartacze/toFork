import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";

import createHistory from "history/createBrowserHistory";

import configureStore from "./store";
import App from "./containers/App";

const initialState = {};
const history = createHistory();

const store = configureStore(initialState, history);

console.log("store: ", store.getState());

injectGlobal`
  body, html { 
    height: 100vh;
    width: 100wh;
    padding: 0;
    margin: 0; }
`;

render(
  <App store={store} history={history} />,
  document.getElementById("root")
);
