import produce from "immer";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";

export const increase = (input) => ({
  type: INCREASE,
  input,
});

export const decrease = (input) => ({
  type: DECREASE,
  input,
});

export const increaseAsync = (input) => ({
  type: INCREASE_ASYNC,
  input,
})

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case INCREASE:
        draft.number = state.number + action.input;
        break;
      case INCREASE_ASYNC:
        draft.number = state.number + action.input;
        break;
      case DECREASE:
        draft.number = state.number - action.input;
        break;
      default:
        break;
    }
  });
}

export default counter;
