import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import rootReducer from "./modules/rootReducer";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
