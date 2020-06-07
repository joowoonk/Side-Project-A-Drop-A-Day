import axios from "axios";

export const fetchQuote = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_QUOTE_START" });
    console.log("FETCH_STATRT");
    axios
      .get("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
      .then((res) => {
        console.log("FETCH SUCESS");
        dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: res });
      })
      .catch((error) => {
        console.log("FAILED");
        dispatch({
          type: "FETCH_QUOTE_FAILURE",
          payload: error,
        });
      });
  };
};
