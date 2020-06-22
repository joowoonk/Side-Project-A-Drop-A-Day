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
export const RESET_TOMATOES_SUCESS = "RESET_TOMATOES_SUCESS";
export const DELETE_PROJECT_START = "DELETE_PROJECT_START";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_FAILURE = "DELETE_PROJECTFAILURE";

const finished = 0;

//function to grab all the users data
export const fetchTomatoes = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TOMATOES_START });

    axiosWithAuth()
      .get(`/tomatoes`)
      .then((res) => {
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

export const addProject = (project, tomatoes, user_id) => {
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
        alert("Your project's added!");
        dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data });
      })
      .catch((err) =>
        dispatch({
          type: ADD_PROJECT_FAILURE,
          payload: err,
        })
      );
  };
};

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
        dispatch({ type: DELETE_PROJECT_FAILURE, payload: err });
      });
  };
};

export const deleteProject = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_PROJECT_START });
    axiosWithAuth()
      .delete(`/tomatoes/project/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_PROJECT_SUCCESS, payload: res });
        axiosWithAuth()
          .get(`/tomatoes`)
          .then((res) => {
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
        dispatch({ type: DELETE_PROJECT_FAILURE, payload: err });
      });
  };
};

export const resetFinishingTomatoes = (id) => {
  return (dispatch) => {
    dispatch({ type: FINISHED_TOMATOES_START });
    axiosWithAuth()
      .put(`/tomatoes/reset/${id}`)
      .then((res) => {
        dispatch({ type: RESET_TOMATOES_SUCESS, payload: res });
        axiosWithAuth()
          .get(`/tomatoes`)
          .then((res) => {
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
