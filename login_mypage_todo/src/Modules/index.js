import { combineReducers } from "redux";
import todos from "./todos";
import user from "./user";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todos,
  user,
});


export default persistReducer(persistConfig, rootReducer);
