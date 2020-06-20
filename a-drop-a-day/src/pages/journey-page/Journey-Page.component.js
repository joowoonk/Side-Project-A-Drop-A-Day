import React, { useState, useEffect } from "react";
import Timer from "../../components/timer/timer";
import SubjectForm from "../../components/subject-form/subject-form.component";
import Subject from "../../components/subject/subject.component";
import "./journey-page.styles.scss";
import Helmet from "react-helmet";

const JourneyPage = () => {
  //make sure to create a form where a user can add their subject with a tomato

  //as tomato ripes a selected subject in a limited of amount tomatoes per subject has.
  // might need to create a component that has a subject
  // in that subject component, should have a trace of blank boxes to check per tomato
  //mapping through length of tomatoes and produce boxes that has colorless color then fill up per tomato
  //might need to use passing down the state and if subject.id met then it will fill.
  // probably need to find a way to disabled play button in timer component so it wont trigger to start without start from the subject.

  const [Minutes, setMinutes] = useState(25);
  const [isStopping, setIsStopping] = useState(true);
  const [breakTime, setBreakTime] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [timeOn, setTimeOn] = useState(false);
  const [userId, setUserId] = useState(0);
  const [focusTime, setFocusTime] = useState(false);
  // const [maximum, setMaximum] = useState(false)

  useEffect(() => {
    if (!isStopping) {
      const id = window.setInterval(() => {
        setMinutes((min) => min - 1);
      }, 60000);

      return () => window.clearInterval(id);
    } else {
    }
  }, [isStopping]);
  // console.log({ Minutes });

  // let someColor = "Blue";
  var formattedNumber = ("0" + Minutes).slice(-2);

  const styles = {
    // backgroundColor: backgroundColor,
    // fontSize: someSize,
    color: "tomato",
    // padding: paddings,
  };
  const coffee = {
    // backgroundColor: backgroundColor,
    // fontSize: someSize,
    color: "brown",
    // padding: paddings,
  };
  //  ...
  //  <div style={styles}>

  if (Minutes <= -1) {
    setMinutes(99);
    window.open("http://localhost:3000/tomatoes");
    window.close();
  }
  console.log(breakTime);
  return (
    <div className="proejctboard">
      {focusTime && <Helmet title={`ripenning..`}></Helmet>}
      {!focusTime && <Helmet title={`A Drop A Day`}></Helmet>}
      <Timer
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
        minutes={Minutes}
        setBreakTime={setBreakTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
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
    </div>
  );
};

export default JourneyPage;
