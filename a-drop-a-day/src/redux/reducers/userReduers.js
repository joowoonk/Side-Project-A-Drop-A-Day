import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  LOGOUT,
  FETCH_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "../actions/userActions";
const initialState = {
  user: [],
  error: "",
  chosen: false,
  loading: false,
  login: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.message,
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
        user: action.payload,
        login: false,
      };
    case REGISTER_USER_FAILURE:
      return {
        error: action.payload,
        login: false,
      };
    case LOGOUT:
      localStorage.clear();
      window.location.href = "/";
      return {
        loading: false,
        login: false,
      };
    default:
      return state;
  }
};
