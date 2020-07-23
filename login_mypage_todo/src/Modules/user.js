import produce from "immer";

// 액션 타입
const LOGIN_REQUEST = "login/LOGIN_REQUEST";
const LOGOUT_REQUEST = "login/LOGOUT_REQUEST";

// 액션 생성 함수
export const isLoggedIn = (input) => ({
  type: LOGIN_REQUEST,
  input,
});

export const isLoggedOut = (isLogged) => ({
  type: LOGOUT_REQUEST,
  isLogged,
});

//초기 상태
const initialState = {
  input: undefined,
  isLogged: false,
};

//리듀서 함수
function user(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.input = action.input;
        draft.isLogged = true;
        console.log(state);
        break;
      case LOGOUT_REQUEST:
        draft.isLogged = false;
        draft.input = undefined;
        break;
      default:
        return initialState;
    }
  });
}

export default user;
