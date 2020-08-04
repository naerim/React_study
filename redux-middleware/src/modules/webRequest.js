import produce from "immer";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

// 액션 타입, 한 요청당 세 개
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_USERS = "GET_USERS";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

// thunk 함수 생성
// thunk 함수 내부에서는 시작, 성공, 실패했을 때 다른 액션을 디스패치 한다.
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태, 요청의 로딩 중 상태는 loading이라는 객체애서 관리
const initialState = {
  post: null,
  users: null,
};

function webRequest(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_POST_SUCCESS: // 요청 완료
        draft.post = action.payload;
        break;
      case GET_USERS_SUCCESS: // 요청 완료
        draft.users = action.payload;
        break;
      default:
        break;
    }
  });
}

export default webRequest;
