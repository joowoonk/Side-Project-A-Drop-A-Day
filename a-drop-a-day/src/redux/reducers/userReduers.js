import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT,
} from "../actions/userActions";
const initialState = {
  user: [],
  error: "",
  chosen: false,
  loading: false,
  isFetching: false,
  login: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: true,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        login: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        login: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        // user: action.payload,
        login: false,
      };
    case REGISTER_USER_FAILURE:
      return {
        error: action.payload,
        login: false,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        loading: false,
        login: false,
      };
    default:
      return state;
  }
};
