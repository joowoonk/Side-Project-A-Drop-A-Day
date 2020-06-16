import {
  FETCH_TOMATOES_START,
  FETCH_TOMATOES_SUCCESS,
  FETCH_TOMATOES_FAILURE,
  ADD_SUBJECT_START,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FAILURE,
} from "../actions/tomatoesActions";

const initialState = {
  subjects: "",
  tomatoes: "",
  isFetching: false,
  isAdding: false,
  error: "",
  finished: 0,
  // boxes: [],
};

export const tomatoesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOMATOES_START:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_TOMATOES_SUCCESS:
      return {
        ...state,
        isFetching: true,
        tomatoes: [...action.payload],
      };
    case FETCH_TOMATOES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.type,
      };
    case ADD_SUBJECT_START:
      return {
        ...state,
        isAdding: false,
      };
    case ADD_SUBJECT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        tomatoes: [...action.payload],
        isAdding: true,
      };
    case ADD_SUBJECT_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.type,
      };
    default:
      return state;
  }
};
