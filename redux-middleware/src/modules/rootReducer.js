import { combineReducers } from "redux";
import counter from "./counter";
import webRequest from "./webRequest";

const rootReducer = combineReducers({
  counter,
  webRequest,
});

export default rootReducer;
