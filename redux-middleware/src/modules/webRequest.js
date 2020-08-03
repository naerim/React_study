import produce from "immer";
import * as api from "../lib/api";

// 액션 타입, 한 요청당 세 개
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAILURE = "GET_POST_FAILURE";
const GET_USERS = "GET_USERS";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "GET_USERS_FAILURE";

// thunk 함수 생성
// thunk 함수 내부에서는 시작, 성공, 실패했을 때 다른 액션을 디스패치 한다.
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

// 초기 상태, 요청의 로딩 중 상태는 loading이라는 객체애서 관리
const initialState = {
  loading: {
    post: false,
    users: false,
  },
  post: null,
  users: null,
};

function webRequest(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_POST: // 요청 시작
        draft.loading.post = true;
        break;
      case GET_POST_SUCCESS: // 요청 완료
        draft.loading.post = false;
        draft.post = action.payload;
        break;
      case GET_POST_FAILURE: // 요청 완료
        draft.loading.post = false;
        break;
      case GET_USERS: // 요청 시작
        draft.loading.users = true;
        break;
      case GET_USERS_SUCCESS: // 요청 완료
        draft.loading.users = false;
        draft.users = action.payload;
        break;
      case GET_USERS_FAILURE: // 요청 완료
        draft.loading.users = false;
        break;
      default:
        break;
    }
  });
}

export default webRequest;
