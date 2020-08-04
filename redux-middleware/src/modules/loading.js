import produce from "immer";

const START_LOADING = "START_LOADING";
const FINISH_LOADING = "FINISH_LOADING";

export const startLoading = (requestType) => ({
  type: START_LOADING,
  requestType,
});

export const finishLoading = (requestType) => ({
  type: FINISH_LOADING,
  requestType,
});

const initialState = {};

function loading(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case START_LOADING:
        action.payload = true;
        break;
      case FINISH_LOADING:
        action.payload = false;
        break;
      default:
        break;
    }
  });
}

export default loading;
