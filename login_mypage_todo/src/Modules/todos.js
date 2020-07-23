import produce from "immer";

// 액션 타입
const CHNAGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수
export const changeInput = (input) => ({
  type: CHNAGE_INPUT,
  input,
});

let id = 2;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

// 초기 상태
const initialState = {
  input: "",
  todos: [{ id: 1, text: "리액트 기초 배우기", done: true }],
};

// 리듀서 함수
function todos(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CHNAGE_INPUT:
        draft.input = action.input;
        console.log(state);
        break;
      case INSERT:
        draft.todos.push(action.todo);
        break;
      case TOGGLE:
        const todo = draft.todos.find((todo) => todo.id === action.id);
        todo.done = !todo.done;
        break;
      case REMOVE:
        const index = draft.todos.findIndex((todo) => todo.id === action.id);
        draft.todos.splice(index, 1);
        break;
      default:
        return initialState;
    }
  });
}

export default todos;
