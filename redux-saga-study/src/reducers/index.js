import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import webRequest, { webSaga } from "./webRequest";
import loading from "./loading";

const rootReducer = combineReducers({
  webRequest,
  loading,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 함
  yield all([webSaga()]);
}

export default rootReducer;
