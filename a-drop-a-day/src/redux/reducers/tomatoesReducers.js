import {
  FETCH_TOMATOES_START,
  FETCH_TOMATOES_SUCCESS,
  FETCH_TOMATOES_FAILURE,
  ADD_SUBJECT_START,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FAILURE,
  FINISHED_ONE_TOMATOES,
} from "../actions/tomatoesActions";

const initialState = {
  subjects: "",
  tomatoes: "",
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
        tomatoes: [...action.payload],
      };
    case FETCH_TOMATOES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.type,
      };
    case ADD_SUBJECT_START:
      return {
        ...state,
        isAdding: false,
      };
    case ADD_SUBJECT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        tomatoes: [...action.payload],
        isAdding: true,
      };
    case FINISHED_ONE_TOMATOES:
      // console.log(action.payload);
      // console.log("action.payload", action.payload);
      // console.log({ state });
      let finishing = state.tomatoes.map((subject) => {
        console.log({ subject });
        if (action.payload == subject.id) {
          console.log(subject.finished);
          subject.finished += 1;
          // return subject;
        } else {
          // return;
        }
      });
      return {
        ...state,

        // action.payload == subject.id
        //   ? [(state.tomatoes.finished += 1)]
        //   : [],
      };
    case ADD_SUBJECT_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.type,
      };
    default:
      return state;
  }
};
