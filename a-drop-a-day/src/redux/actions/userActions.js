import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGOUT = "LOGOUT";

export const loginUserAction = (username, password) => {
  console.log(username, password);
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .post(`/auth/login`, { username, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        // pass down userId to localstorage when loginAction works.
        localStorage.setItem("user_id", res.data.id);
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

export const userInformation = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START });

    //michael - fetch the users todo list might need the user id or just use token
    axiosWithAuth()
      .get(`/auth/user`)
      .then((res) => {
        console.log("Grabbed the user", res);
        //payload might change after the backend calls
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log("failed");
        dispatch({
          type: FETCH_USER_FAILURE,
          payload: err,
        });
      });
  };
};

export const registerUserAction = (username, password) => {
  console.log(username, password);
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .post(`/auth/register`, { username, password })
      .then((res) => {
        // console.log(username, password);
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
