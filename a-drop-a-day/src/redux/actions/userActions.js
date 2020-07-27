import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { history } from "../../index";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGOUT = "LOGOUT";

//For login endpoint
export const loginUserAction = (username, password) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .post(`/auth/login`, { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert(`Welcome ${username}, hope you have a great day!`);
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        alert("Incorrect username/password!");
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: err,
        });
      });
  };
};

//fetching all user info
export const userInformation = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START });

    //michael - fetch the users todo list might need the user id or just use token
    axiosWithAuth()
      .get(`/auth/user`)
      .then((res) => {
        // console.log("LOGIN INFO", res);
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_USER_FAILURE,
          payload: err,
        });
      });
  };
};

//sign up endpoint
export const registerUserAction = (username, password) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .post(`/auth/register`, { username, password })
      .then((res) => {
        alert(`Dear ${username}, your account's just got created`);
        // window.open("https://side-project-a-drop-a-day.vercel.app/signin");
        // window.close();
        history.push("signin");
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        alert("This username is unavailable!");
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: err,
        });
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};
