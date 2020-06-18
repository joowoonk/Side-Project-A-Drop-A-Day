import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Subject from "../subject/subject.component";
import { useSelector } from "react-redux";

import "./timer.styles.scss";

export default function Timer() {
  const [Minutes, setMinutes] = useState(25);
  const [isStopping, setIsStopping] = useState(true);
  const [breakTime, setBreakTime] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  // const [maximum, setMaximum] = useState(false)
  useEffect(() => {
    if (!isStopping) {
      const id = window.setInterval(() => {
        setMinutes((min) => min - 1);
      }, 1000);

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
    color: "#009999",
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
  if (Minutes < 23) {
    styles.color = "#00cc99";
  }
  // if (Minutes < 21) {
  //   styles.color = "#00ff99";
  // }
  if (Minutes < 19) {
    styles.color = "#bfff00";
  }
  if (Minutes < 17) {
    styles.color = "#ffff00";
  }
  if (Minutes < 15) {
    styles.color = "#ccff99";
  }
  if (Minutes < 13) {
    styles.color = "#ffff99";
  }
  if (Minutes < 11) {
    styles.color = "#ffcccc";
  }
  if (Minutes < 9) {
    styles.color = "#ffcc66";
  }
  if (Minutes < 7) {
    styles.color = "#ff9966";
  }
  if (Minutes < 5) {
    styles.color = "#ff9933";
  }
  if (Minutes < 3) {
    styles.color = "#ff6600";
  }

  if (Minutes < 1) {
    styles.color = "#ff0000";
  }
  if (Minutes <= -1) {
    setMinutes(99);
    window.open("http://localhost:3000/tomatoes");
    window.close();
  }

  let warning = "Are you about that?";
  return (
    <div>
      <div className="container">
        <button
          onClick={() => {
            setBreakTime(true);
            setMinutes(5);
            setIsStopping(false);
          }}
        >
          Short Rest
        </button>
        <button
          onClick={() => {
            setBreakTime(true);
            setMinutes(15);
            setIsStopping(false);
          }}
        >
          Long Rest Rest
        </button>
        <button
          onClick={() => {
            setBreakTime(false);
            setIsStopping(true);
            setMinutes(25);
          }}
        >
          Focus Time
        </button>
      </div>

      {breakTime ? (
        <div className="container">
          <i style={coffee} className="fas fa-coffee fa-10x" />
          {!isStopping ? <>Coffee Time Is On...</> : <>Paused</>}
        </div>
      ) : (
        <div className="container">
          <i style={styles} className="fas fa-apple-alt fa-10x" />
          {!isStopping ? <>It's ripening</> : <>Paused</>}
        </div>
      )}

      <br />

      <div className="container">
        <div className="time">{formattedNumber} Minutes</div>
      </div>
      {!breakTime ? (
        <>
          {!isStopping ? (
            <div className="container">
              {" "}
              <div className="button">
                <button
                  className="play-pause"
                  onClick={() => {
                    setIsStopping(!isStopping);
                  }}
                >
                  <i className="fa fa-pause fa-2x" />
                </button>
                <button onClick={() => setMinutes(Minutes + 1)}>
                  <i className="fa fa-plus fa-2x" />
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}

          <Subject
            minutes={Minutes}
            setBreakTime={setBreakTime}
            setMinutes={setMinutes}
            setIsStopping={setIsStopping}
            isStopping={isStopping}
            // user_id={userState}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
