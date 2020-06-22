import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchQuote } from "../../redux/actions/quotesAction";
//useeffet

import { QuoteBox } from "./quotes.styles";

//fetch the quote inside using action... how did i do it again?
const Quotes = () => {
  const dispatch = useDispatch();
  const quoteState = useSelector((state) => state.quoteReducers.quotes);

  useEffect(() => {
    dispatch(fetchQuote());
  }, []);

  return (
    <>
      <QuoteBox key={quoteState.id}>
        <h3>"{quoteState.en}"</h3>
        <p>--{quoteState.author}</p>
      </QuoteBox>
    </>
  );
};

export default Quotes;
