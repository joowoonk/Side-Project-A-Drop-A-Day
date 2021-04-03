import React, { useState, useEffect } from "react";
import Timer from "../../components/timer/timer";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import Subject from "../../components/subject/subject.component";
import "./journey-page.styles.scss";
import Helmet from "react-helmet";
import useWarningClosingWhileTimeOn from "../../hooks/useWarningClosingWhileTimeOn"
const JourneyPage = ({ isStopping, setIsStopping }) => {
  //make sure to create a form where a user can add their subject with a tomato

  //as tomato ripes a selected subject in a limited of amount tomatoes per subject has.
  // might need to create a component that has a subject
  // in that subject component, should have a trace of blank boxes to check per tomato
  //mapping through length of tomatoes and produce boxes that has colorless color then fill up per tomato
  //might need to use passing down the state and if subject.id met then it will fill.
  // probably need to find a way to disabled play button in timer component so it wont trigger to start without start from the subject.

  const [Prompt, setIsFocusing, setPrinstine ] = useWarningClosingWhileTimeOn()
  const [Minutes, setMinutes] = useState(localStorage.getItem("minutes"));
  //  const [Minutes, setMinutes] = localStorage.getItem("minutes")
  //Minutes will start by 25 mins
  const [breakTime, setBreakTime] = useState(false);
  //breaktime starts as false
  const [timeOn, setTimeOn] = useState(false);
  // when focus time starts this will turn true
  const [userId, setUserId] = useState(0);
  //will grab from localstorage
  const [focusTime, setFocusTime] = useState(false);
  // will disable navbar when focus time starts (true)
  useEffect(() => {
    
    // y = 
    // console.log(localStorage.getItem("minutes"))
    //this will let the timer goes by a minute a time
    if (!isStopping) {
      const id = window.setInterval(() => {
        setMinutes((min) => min - 1);
      }, 60000);
      //60 seconds
      return () => window.clearInterval(id);
    } else {
    }
  }, [isStopping]);

  var formattedNumber = ("0" + Minutes).slice(-2);
  //when minutues is one digit number, it will force to have 0"#"

  //coloring font awesome
  const styles = {
    color: "tomato",
  };
  const coffee = {
    color: "brown",
  };

  //npm where it scroll up when timer starts
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="proejctboard">
      {/* title of the tab will chage because of npm package, helmet */}
      {focusTime && <Helmet title={`ripenning..`}></Helmet>}
      {!focusTime && <Helmet title={`A Drop A Day`}></Helmet>}
      <Timer
        setPrinstine={setPrinstine}
        setIsFocusing={setIsFocusing}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        setMinutes={setMinutes}
        setIsStopping={setIsStopping}
        Minutes={Minutes}
        coffee={coffee}
        isStopping={isStopping}
        styles={styles}
        formattedNumber={formattedNumber}
        setUserId={setUserId}
        breakTime={breakTime}
        focusTime={focusTime}
        setFocusTime={setFocusTime}
      />
      <Subject
      
        setPrinstine={setPrinstine}
        setIsFocusing={setIsFocusing}
        minutes={Minutes}
        scrollToTop={scrollToTop}
        setBreakTime={setBreakTime}
        breakTime={breakTime}
        setMinutes={setMinutes}
        setIsStopping={setIsStopping}
        isStopping={isStopping}
        setTimeOn={setTimeOn}
        timeOn={timeOn}
        setUserId={setUserId}
        userId={userId}
        focusTime={focusTime}
        setFocusTime={setFocusTime}
        // user_id={userState}
      />
      {Prompt}
    </div>
  );
};

export default JourneyPage;
