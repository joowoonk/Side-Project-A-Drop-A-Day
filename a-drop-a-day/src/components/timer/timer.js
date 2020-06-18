import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Subject from "../subject/subject.component";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "./timer.styles.scss";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

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
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setBreakTime(true);
            setMinutes(5);
            setIsStopping(false);
          }}
        >
          Short Rest
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setBreakTime(true);
            setMinutes(15);
            setIsStopping(false);
          }}
        >
          Long Rest Rest
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setBreakTime(false);
            setIsStopping(true);
            setMinutes(25);
          }}
        >
          Focus Time
        </Button>

        {breakTime ? (
          <div>
            <i style={coffee} className="fas fa-coffee fa-10x" />
            {!isStopping ? (
              <>
                <br />
                Coffee Time Is On...
              </>
            ) : (
              <>
                <br />
                Paused
              </>
            )}
          </div>
        ) : (
          <div>
            <i style={styles} className="fas fa-apple-alt fa-10x" />
            {!isStopping ? (
              <>
                <br />
                It's ripening
              </>
            ) : (
              <>
                <br />
                Paused
              </>
            )}
          </div>
        )}

        <br />

        <div className="time">{formattedNumber} Minutes</div>
      </div>
      {!breakTime ? (
        <>
          {!isStopping ? (
            <div className="pause-and-plus">
              {" "}
              <div>
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
