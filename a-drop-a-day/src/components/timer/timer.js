import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import "./styles.css";

export default function Timer() {
  const [Minutes, setMinutes] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        setMinutes((min) => min - 1);
      }, 1000);

      return () => window.clearInterval(id);
    } else {
    }
  }, [isRunning]);
  console.log({ Minutes });

  // let someColor = "Blue";
  var formattedNumber = ("0" + Minutes).slice(-2);

  const styles = {
    // backgroundColor: backgroundColor,
    // fontSize: someSize,
    color: "#ADFF2F",
    // padding: paddings,
  };
  //  ...
  //  <div style={styles}>
  if (Minutes < 24) {
    styles.color = "red";
  }
  if (Minutes == 0) {
    setMinutes(25);
    setIsRunning(false);
  }
  return (
    <div>
      <i style={styles} className="fas fa-apple-alt fa-10x" />

      <br />
      {isRunning ? <>Coutning Down</> : <>Pause</>}
      <div className="timer-circle">
        <div className="time">{formattedNumber} Minutes</div>
      </div>
      <div className="button">
        <button
          disabled={isRunning}
          className="play-pause"
          onClick={() => {
            setIsRunning(true);
          }}
        >
          <i className="fa fa-play fa-2x" />
        </button>
        <button
          className="play-pause"
          onClick={() => {
            setIsRunning(false);
          }}
        >
          <i className="fa fa-pause fa-2x" />
        </button>
        <button onClick={() => setMinutes(Minutes + 1)}>inc Minutes</button>
        <button
          onClick={() => {
            setIsRunning(false);
            setMinutes(25);
          }}
          className="reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
