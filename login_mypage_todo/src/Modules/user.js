import produce from "immer";

// 액션 타입
const LOGIN_REQUEST = "login/LOGIN_REQUEST";
const LOGOUT_REQUEST = "login/LOGOUT_REQUEST";

// 액션 생성 함수
export const isLoggedIn = (id) => ({
  type: LOGIN_REQUEST,
  id,
});

export const isLoggedOut = () => ({
  type: LOGOUT_REQUEST,
});

//초기 상태
const initialState = {
  id: undefined,
  isLogged: undefined,
};

//리듀서 함수
function user(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.id = action.id;
        draft.isLogged = true;
        console.log(state);
        break;
      case LOGOUT_REQUEST:
        draft.isLogged = false;
        draft.id = undefined;
        break;
      default:
        break;
    }
  });
}

export default user;
