import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_TOMATOES_START = "FETCH_TOMATOES_START";
export const FETCH_TOMATOES_SUCCESS = "FETCH_TOMATOES_SUCCESS";
export const FETCH_TOMATOES_FAILURE = "FETCH_TOMATOES_FAILURE";

const userId = localStorage.getItem("userId");

//function to grab all the users data
export const fetchTomatoes = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TOMATOES_START });

    //michael - fetch the users todo list might need the user id or just use token
    axiosWithAuth()
      .get(`/api/tomatoes/${userId}/subject`)
      .then((res) => {
        console.log("Grabbed the todos", res);
        //payload might change after the backend calls
        dispatch({ type: FETCH_TOMATOES_SUCCESS, payload: res.data });
      })
      .catch((err) =>
        dispatch({
          type: FETCH_TOMATOES_FAILURE,
          payload: err,
        })
      );
  };
};
