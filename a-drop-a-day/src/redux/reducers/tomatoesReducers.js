const initialState = {
  tomatoes: "",
  isFetching: false,
  error: "",
};

import {
  FETCH_TOMATOES_START,
  FETCH_TOMATOES_SUCCESS,
  FETCH_TOMATOES_FAILURE,
} from "../actions/tomatoesActions";

export const quoteReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOMATOES_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_TOMATOES_SUCCESS":
      // const randomNumber = Math.floor(Math.random() * 500);
      return {
        ...state,
        tomatoes: action.payload.data,
      };
    case "FETCH_TOMATOES_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.type,
      };
    default:
      return state;
  }
};
