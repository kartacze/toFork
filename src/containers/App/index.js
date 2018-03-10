import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div style={styles}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
