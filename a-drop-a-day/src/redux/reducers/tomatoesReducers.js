import {
  FETCH_TOMATOES_START,
  FETCH_TOMATOES_SUCCESS,
  FETCH_TOMATOES_FAILURE,
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  FINISHED_TOMATOES_START,
  FINISHED_TOMATOES_SUCESS,
  FINISHED_TOMATOES_FAILURE,
  RESET_TOMATOES_SUCESS,
} from "../actions/tomatoesActions";

const initialState = {
  projects: "",
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
        projects: [...action.payload],
      };
    case FETCH_TOMATOES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.type,
      };
    case ADD_PROJECT_START:
      return {
        ...state,
        isAdding: false,
      };
    case ADD_PROJECT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        projects: [...action.payload],
        isAdding: true,
      };
    case FINISHED_TOMATOES_START:
      return {
        ...state,
      };
    case FINISHED_TOMATOES_SUCESS:
      return {
        ...state,
      };
    case FINISHED_TOMATOES_FAILURE:
      return {
        ...state,
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.type,
      };
    case RESET_TOMATOES_SUCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
