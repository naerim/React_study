import { combineReducers } from "redux";
import todosWeek from "./todosWeek";
import todos from "./todos";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todosWeek,
  todos,
});

export default persistReducer(persistConfig, rootReducer);
