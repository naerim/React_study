import produce from "immer";

// 액션 타입
const CHANGE_INPUT_WEEK = "todos/CHANGE_INPUT_WEEK"; // 인풋 값을 변경함
const INSERT_WEEK = "todos/INSERT_WEEK"; // 새로운 todo를 등록함
const TOGGLE_WEEK = "todos/TOGGLE_WEEK"; // todo를 체크/체크 해제함
const REMOVE_WEEK = "todos/REMOVE_WEEK"; // todo를 제거함
const CHANGE_INPUT_MONTH = "todos/CHANGE_INPUT_MONTH"; // 인풋 값을 변경함
const INSERT_MONTH = "todos/INSERT_MONTH"; // 새로운 todo를 등록함
const TOGGLE_MONTH = "todos/TOGGLE_MONTH"; // todo를 체크/체크 해제함
const REMOVE_MONTH = "todos/REMOVE_MONTH"; // todo를 제거함

// 액션 생성 함수
export const changeInputWeek = (inputWeek) => ({
  type: CHANGE_INPUT_WEEK,
  inputWeek,
});

export const changeInputMonth = (inputMonth) => ({
  type: CHANGE_INPUT_MONTH,
  inputMonth,
});

let idWeek = 3; // insertWeek가 호출될 때마다 1씩 더해진다.
let idMonth = 3; // insertMonth가 호출될 때마다 1씩 더해진다.
export const insertWeek = (text) => ({
  type: INSERT_WEEK,
  todo: {
    id: idWeek++,
    text,
    done: false,
  },
});
export const insertMonth = (text) => ({
  type: INSERT_MONTH,
  todo: {
    id: idMonth++,
    text,
    done: false,
  },
});

export const toggleWeek = (id) => ({
  type: TOGGLE_WEEK,
  id,
});
export const toggleMonth = (id) => ({
  type: TOGGLE_MONTH,
  id,
});

export const removeWeek = (id) => ({
  type: REMOVE_WEEK,
  id,
});
export const removeMonth = (id) => ({
  type: REMOVE_MONTH,
  id,
});

// 초기 상태
const initialState = {
  inputWeek: "",
  inputMonth: "",
  todosWeek: [
    {
      id: 1,
      text: "자바스크립트 기초",
      done: true,
    },
    {
      id: 2,
      text: "자바스크립트 인강",
      done: false,
    },
  ],
  todosMonth: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

// 리듀서 함수
function todos(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_INPUT_WEEK:
        draft.inputWeek = action.inputWeek;
        break;
      case CHANGE_INPUT_MONTH:
        draft.inputMonth = action.inputMonth;
        break;
      case INSERT_WEEK:
        console.log(state);
        draft.todosWeek.push(action.todo);
        break;
      case INSERT_MONTH:
        draft.todosMonth.push(action.todo);
        break;
      case TOGGLE_WEEK:
        const todoWeek = draft.todosWeek.find((todo) => todo.id === action.id);
        todoWeek.done = !todoWeek.done;
        break;
      case TOGGLE_MONTH:
        const todoMonth = draft.todosMonth.find(
          (todo) => todo.id === action.id
        );
        todoMonth.done = !todoMonth.done;
        break;
      case REMOVE_WEEK:
        const indexWeek = draft.todosWeek.findIndex(
          (todo) => todo.id === action.id
        );
        draft.todosWeek.splice(indexWeek, 1);
        break;
      case REMOVE_MONTH:
        const indexMonth = draft.todosMonth.findIndex(
          (todo) => todo.id === action.id
        );
        draft.todosMonth.splice(indexMonth, 1);
        break;
      default:
        return initialState;
    }
  });
}

export default todos;
