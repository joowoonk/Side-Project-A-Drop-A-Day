import React from "react";

import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "./timer.styles.scss";
import Button from "@material-ui/core/Button";
import Helmet from "react-helmet";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: theme.spacing(3),
    // width: "50ch",
    // margin: "4% auto",
  },
  paper: {
    padding: 110,
    textAlign: "center",
    boxShadow: "0 1px 3px 1px black",
    background: "floralwhite",
    // marginLeft: ,
    // marginRight: -250,
    // color: theme.palette.text.secondary,
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
}) {
  const classes = useStyles();
  const projects = useSelector((state) => state.tomatoesReducers.projects);

  // console.log(projects);
  // let finishedCounts;
  let accumulatedFinished = projects.map((res) => res.finished);
  let finishedCounts = accumulatedFinished.reduce(
    (total, acc) => total + acc,
    0
  );
  console.log({ finishedCounts });
  const isFetching = useSelector((state) => state.tomatoesReducers.isFetching);

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) " + rminutes + " minutes";
  }

  return (
    <div>
      {!focusTime && <Helmet title={`A Drop A Day`}></Helmet>}
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="container">
            <Paper className={classes.paper}>
              {" "}
              {breakTime ? (
                <div className="icon">
                  <i style={coffee} className="fas fa-coffee fa-10x" />
                  {breakTime ? (
                    <>
                      <br />
                      <h5>Coffee Time Is On...</h5>
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
                  <i style={styles} className="fas fa-book fa-10x" />
                  {!isStopping ? (
                    <>
                      <br />
                      <h5> FOCUSING TIME...</h5>
                      {!isStopping ? (
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            // className="controller"
                            // className="play-pause"
                            onClick={() => {
                              setIsStopping(!isStopping);
                              setFocusTime(false);
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
                              onClick={() => setMinutes(Minutes + 1)}
                            >
                              <i className="fa fa-plus fa-2x" />
                            </Button>
                          )}
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <>
                      <br />
                      <h5>PAUSED</h5>
                    </>
                  )}
                </div>
              )}
              <h5 className="time">{formattedNumber} Minutes</h5>
              <Button
                variant="contained"
                color="primary"
                className="controller"
                onClick={() => {
                  setBreakTime(true);
                  setMinutes(5);
                  setIsStopping(false);
                  setUserId();
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
                }}
              >
                Focus Time
              </Button>
              {isFetching && (
                <p>
                  You focused about&nbsp;
                  {timeConvert(finishedCounts * 25)} so far today
                </p>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
