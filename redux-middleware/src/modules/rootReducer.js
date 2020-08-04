import { combineReducers } from "redux";
import counter from "./counter";
import webRequest from "./webRequest";
import loading from "./loading";

const rootReducer = combineReducers({
  counter,
  webRequest,
  loading,
});

export default rootReducer;
