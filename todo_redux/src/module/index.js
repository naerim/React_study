import { combineReducers } from "redux";
import todosWeek from "./todosWeek";
import todos from "./todos";

const rootReducer = combineReducers({
  todosWeek,
  todos,
});

export default rootReducer;
