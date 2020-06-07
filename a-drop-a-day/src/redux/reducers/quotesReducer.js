const initialState = {
  quotes: "",
  isFetching: false,
  error: "",
};

export const quoteReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUOTE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_QUOTE_SUCCESS":
      const randomNumber = Math.floor(Math.random() * 500);
      return {
        ...state,
        quotes: action.payload.data[randomNumber],
      };
    case "FETCH_QUOTE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.type,
      };
    default:
      return state;
  }
};
