import { combineReducers } from "redux";
import { quoteReducers } from "./quotesReducer";
import { userReducer } from "./userReduers";
import { tomatoesReducers } from "./tomatoesReducers";

export default combineReducers({
  quoteReducers,
  userReducer,
  tomatoesReducers,
});
