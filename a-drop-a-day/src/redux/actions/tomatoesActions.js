import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_TOMATOES_START = "FETCH_TOMATOES_START";
export const FETCH_TOMATOES_SUCCESS = "FETCH_TOMATOES_SUCCESS";
export const FETCH_TOMATOES_FAILURE = "FETCH_TOMATOES_FAILURE";
export const ADD_SUBJECT_START = "ADD_SUBJECT_START";
export const ADD_SUBJECT_SUCCESS = "ADD_SUBJECT_SUCCESS";
export const ADD_SUBJECT_FAILURE = "ADD_SUBJECT_FAILURE";

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

export const addSubject = (todo) => {
  return (dispatch) => {
    dispatch({ type: ADD_SUBJECT_START });

    axiosWithAuth()
      .post(`/api/tomatoes/${userId}/subject`, todo)
      .then((res) => {
        dispatch({ type: ADD_SUBJECT_SUCCESS, payload: res.data });

        //call the fetchtodos to rerender the list instead of manually refreshing
        // fetchTodos();
      })
      .catch((err) =>
        dispatch({
          type: ADD_SUBJECT_FAILURE,
          payload: err,
        })
      );
  };
};
