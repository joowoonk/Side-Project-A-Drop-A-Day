import { combineReducers } from "redux";
import { quoteReducers } from "./quotesReducer";
import { userReducer } from "./userReduers";

export default combineReducers({
  quoteReducers,
  userReducer,
});
