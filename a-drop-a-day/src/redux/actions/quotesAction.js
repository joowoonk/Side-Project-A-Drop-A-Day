import axios from "axios";

export const fetchQuote = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_QUOTE_START" });

    axios
      .get("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
      .then((res) => {
        dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: res });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_QUOTE_FAILURE",
          payload: error,
        });
      });
  };
};
