import produce from "immer";
import * as api from "../api";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../lib/createRequestSaga";

// action
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_COMMENT = "GET_COMMENT";
const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";

export const getPost = () => ({
  type: GET_POST,
});

export const getComment = () => ({
  type: GET_COMMENT,
});

const getPostSaga = createRequestSaga(GET_POST, api.getPosts);
const getCommentSaga = createRequestSaga(GET_COMMENT, api.getComments);

export function* webSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_COMMENT, getCommentSaga);
}

const initialState = {
  post: null,
  comment: null,
};

function webRequest(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_POST_SUCCESS:
        draft.post = action.payload;
        break;
      case GET_COMMENT_SUCCESS:
        draft.comment = action.payload;
        break;
      default:
        break;
    }
  });
}

export default webRequest;
