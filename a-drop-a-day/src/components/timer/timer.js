import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "./timer.styles.scss";
import Button from "@material-ui/core/Button";
import Helmet from "react-helmet";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";


//styling for timer component
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    marginRight: "1%",
    marginLeft: "1%",
    width: "97%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // margin: "5% 2%",
    // height: "auto",
    // padding: "120%",
    marginTop: 10,
  },
  paper: {
    padding: "auto",
    textAlign: "center",
    boxShadow: "0 1px 3px 1px black",
    background: "floralwhite",
    padding: "10% 0",
    ["@media (Max-width:900px)"]: {
      // eslint-disable-line no-useless-computed-key
      padding: "2% 0",
    },
  },
}));

export default function Timer({
  setBreakTime,
  setMinutes,
  setIsStopping,
  Minutes,
  isStopping,
  breakTime,
  coffee,
  styles,
  formattedNumber,
  setUserId,
  focusTime,
  setFocusTime,
  limit,
  setPrinstine,
  setIsFocusing
}) {
  //classes that will stlye the component
  const classes = useStyles();
   //grabs project from global state.
  const projects = useSelector((state) => state.tomatoesReducers.projects);

  //controlling backgroun music
  const [volume, setVolume] = useState(true);
  const [sound, setSound] = useState(true);

  //total number of finished counts for each 25 minute focusing time.
  let accumulatedFinished = projects.map((res) => res.finished);
  let finishedCounts = accumulatedFinished.reduce(
    (total, acc) => total + acc,
    0
  );

  //will wait until it turns true
  const isFetching = useSelector((state) => state.tomatoesReducers.isFetching);

  //will use to convert the time unit
  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var realMinutes = Math.floor(num % 60);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    var seconds = (hours - rhours) * 60 * 60;
    var rseconds = Math.round(seconds);
    if (num > 60) {
      return (
        "You focused about " +
        rhours +
        " hour(s) " +
        realMinutes +
        " minutes"
      );
    } else if (num > 1) {
      return "You focused about " + rminutes + " minute(s)";
    } else if (num == 0) {
      return "You haven't eaten any tomato yet!";
    }
  }

  return (
    <div>
      {/* While not fucusing time, changes title to A Drop A Day */}
      {!focusTime && <Helmet title={`A Drop A Day`}></Helmet>}

      {/* scrolling works with this */}
      <Link to="section1" />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="container">
            <Paper className={classes.paper}>
              {/* controlls music either mute/unmute */}
              {volume ? (
                <img 
                src="audio on.png"
                            width="50px"
                  
                                             onClick={() => {
                    setVolume(false);
                    setSound(false);
                  }}
                />
                // <i
                //   style={{ color: "blue", textAlign: "right" }}
                //   className="fas fa-volume-up fa-3x"
                //   onClick={() => {
                //     setVolume(false);
                //     setSound(false);
                //   }}
                // />
              ) : (
                              <img 
                src="audio off.png"
                            width="50px"
                  
                                             onClick={() => {
                   setVolume(true);
                    setSound(true);
                  }}
                />
                // <i
                //   style={{ color: "blue", textAlign: "right" }}
                //   className="fas fa-volume-off fa-3x"
                //   onClick={() => {
             
                //   }}
                // />
              )}
              <br />
              <br />
              {/* occurs when the breaktime occurs */}
              {breakTime ? (
                <div className="icon">
                    <img 
                src="coffee.png"
                            width="140px"/>
                  {/* <i style={coffee} className="fas fa-coffee fa-8x" /> */}

                  {breakTime ? (
                    <>
                      {sound ? (
                        <center>
                          <iframe
                            width="0"
                            height="0"
                            display="hidden"
                            src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
                            frameborder="10"
                            // autoplay="1"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </center>
                      ) : (
                        <>
                          <br />
                          <br />
                        </>
                      )}

                      <h5>Coffee Time Is On...</h5>
                      <br />
                      {breakTime && <Helmet title={`break..`}></Helmet>}
                    </>
                  ) : (
                    <>
                      <br />
                      <h5>PAUSED</h5>
                    </>
                  )}
                </div>
              ) : (
                <div>
                  {/* when focusing time occurs */}  <img 
                src="flex.png"
                            width="140px"></img>
                  {/* <i style={styles} className="fas fa-book fa-8x" /> */}
                  {!isStopping ? (
                    <>
                      {!isStopping ? (
                        <div>
                          <h5>
                            {" "}
                            FOCUSING TIME... <br />
                            (all the menus are
                            <br /> disabled meanwhile)
                          </h5>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <>
                      {/* <br /> */}
                      <h5>PAUSED</h5>

                      <br />
                      <br />
                    </>
                  )}
                </div>
              )}
              <h3 className="time">
                {/* shows how much time left and controllers*/}
                {formattedNumber} <span className="minutes">Minutes</span>
              </h3>
              <Button
                variant="contained"
                color="primary"
                className="controller"
                onClick={() => {
                  setBreakTime(true);
                  
                  setMinutes(5);
                  setIsStopping(false);
                  setUserId();
                  setIsFocusing()
                }}
              >
                Short Break
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="controller"
                onClick={() => {
                  setBreakTime(true);
                  setMinutes(15);
                  setIsStopping(false);
                  setUserId();
                  setIsFocusing()
                }}
              >
                Long Break
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="controller lastButton"
                onClick={() => {
                  setBreakTime(false);
                  setFocusTime(false);
                  setIsStopping(true);
                  
                  setMinutes(25);
                  localStorage.setItem("minutes", 25)
                }}
              >
                Focus Time
              </Button>
              {!isStopping && !breakTime ? (
                <>
                  {/* when music (focusing/break time) starts */}
                  <Button
                    variant="contained"
                    color="primary"
                    // className="controller"
                    // className="play-pause"
                    onClick={() => {
                      setIsStopping(!isStopping);
                      setFocusTime(false);
                      setPrinstine()
                      localStorage.setItem("minutes", Minutes)
                  
                    }}
                  >
                    <i className="fa fa-pause fa-2x" />
                  </Button>
                  {30 > Minutes && (
                    <Button
                      variant="contained"
                      color="primary"
                      // disabled={limit}
                      // className="controller"
                      onClick={() => setMinutes(parseInt(Minutes) + 1)}
                    >
                      <i className="fa fa-plus fa-2x" />
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <br />
                  <br />
                </>
              )}
              {isFetching && <p>{timeConvert(finishedCounts * 25)}</p>}
              {sound && !breakTime && !isStopping ? (
                <center>
                  <iframe
                    width="0"
                    height="0"
                    display="hidden"
                    src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
                    frameborder="10"
                    // autoplay="1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </center>
              ) : (
                <>
                  <br />
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
