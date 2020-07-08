import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입
const CHANGE_INPUT = 'todosWeek/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todosWeek/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todosWeek/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todosWeek/REMOVE'; // todo를 제거함

// 액션 생성 함수
export const changeInputWeek = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert가 호출될 때마다 1씩 더해진다.
export const insertWeek = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));

export const toggleWeek = createAction(TOGGLE, (id) => id);
export const removeWeek = createAction(REMOVE, (id) => id);

// 초기 상태
const initialState = {
    inputWeek: '',
    todosWeek: [
        {
            id: 1,
            text: '자바스크립트 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '자바스크립트 사용하기',
            done: false,
        },
    ],
};

// 리듀서 함수
const todosWeek = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) =>
            produce(state, (draft) => {
                draft.inputWeek = input;
            }),
        [INSERT]: (state, { payload: todo }) =>
            produce(state, (draft) => {
                draft.todosWeek.push(todo);
            }),
        [TOGGLE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const todo = draft.todosWeek.find((todo) => todo.id === id);
                todo.done = !todo.done;
            }),
        [REMOVE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const index = draft.todosWeek.findIndex((todo) => todo.id === id);
                draft.todosWeek.splice(index, 1);
            }),
    },
    initialState,
);


export default todosWeek;