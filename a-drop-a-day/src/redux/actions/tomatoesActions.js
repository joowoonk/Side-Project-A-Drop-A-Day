import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_TOMATOES_START = "FETCH_TOMATOES_START";
export const FETCH_TOMATOES_SUCCESS = "FETCH_TOMATOES_SUCCESS";
export const FETCH_TOMATOES_FAILURE = "FETCH_TOMATOES_FAILURE";
export const ADD_SUBJECT_START = "ADD_SUBJECT_START";
export const ADD_SUBJECT_SUCCESS = "ADD_SUBJECT_SUCCESS";
export const ADD_SUBJECT_FAILURE = "ADD_SUBJECT_FAILURE";
export const FINISHED_ONE_TOMATOES = "FINISHED_ONE_TOMATOES";

const user_id = localStorage.getItem("user_Id");
const finished = 0;

//function to grab all the users data
export const fetchTomatoes = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TOMATOES_START });

    //michael - fetch the users todo list might need the user id or just use token
    axiosWithAuth()
      .get(`/tomatoes`)
      .then((res) => {
        // console.log("Grabbed the todos", res);
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

export const addSubject = (subject, tomatoes) => {
  console.log({ subject }, { tomatoes }, { user_id });
  return (dispatch) => {
    dispatch({ type: ADD_SUBJECT_START });

    axiosWithAuth()
      .post(`/tomatoes/${user_id}/subject`, {
        subject,
        tomatoes,
        user_id,
        finished,
      })
      .then((res) => {
        dispatch({ type: ADD_SUBJECT_SUCCESS, payload: res.data });
        console.log("yes you got here");
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

//probably going to need make an endpoint of put or patch to increment the finished
export const finishedOneTomatoes = (id) => {
  return (dispatch) => {
    dispatch({ type: FINISHED_ONE_TOMATOES, payload: id });
  };
};
