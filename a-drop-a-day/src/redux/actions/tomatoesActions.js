import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_TOMATOES_START = "FETCH_TOMATOES_START";
export const FETCH_TOMATOES_SUCCESS = "FETCH_TOMATOES_SUCCESS";
export const FETCH_TOMATOES_FAILURE = "FETCH_TOMATOES_FAILURE";
export const ADD_PROJECT_START = "ADD_PROJECT_START";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE";
export const FINISHED_TOMATOES_START = "FINISHED_TOMATOES_START";
export const FINISHED_TOMATOES_SUCESS = "FINISHED_TOMATOES_SUCESS";
export const FINISHED_TOMATOES_FAILURE = "FINISHED_TOMATOES_FAILURE";

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

export const addProject = (project, tomatoes) => {
  console.log({ project }, { tomatoes }, { user_id });
  return (dispatch) => {
    dispatch({ type: ADD_PROJECT_START });

    axiosWithAuth()
      .post(`/tomatoes/project/${user_id}`, {
        project,
        tomatoes,
        user_id,
        finished,
      })
      .then((res) => {
        dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data });
        console.log("yes you got here");
        //call the fetchtodos to rerender the list instead of manually refreshing
        // fetchTodos();
      })
      .catch((err) =>
        dispatch({
          type: ADD_PROJECT_FAILURE,
          payload: err,
        })
      );
  };
};

//probably going to need make an endpoint of put or patch to increment the finished
export const finishingOneTomatoes = (id) => {
  return (dispatch) => {
    dispatch({ type: FINISHED_TOMATOES_START });
    axiosWithAuth()
      .put(`/tomatoes/project/${id}`)
      .then((res) => {
        dispatch({ type: FINISHED_TOMATOES_SUCESS, payload: res });
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
      })
      .catch((err) => {
        dispatch({ type: FINISHED_TOMATOES_FAILURE, payload: err });
      });
  };
};
