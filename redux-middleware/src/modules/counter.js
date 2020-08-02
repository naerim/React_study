import produce from "immer";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case INCREASE:
        draft.number = state.number + 1;
        console.log(state);
        break;
      case DECREASE:
        draft.number = state.number - 1;
        break;
      default:
        break;
    }
  });
}

export default counter;
