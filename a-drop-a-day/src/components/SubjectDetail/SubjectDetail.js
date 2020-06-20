import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./subject-detail.styles.scss";
import {
  finishingOneTomatoes,
  resetFinishingTomatoes,
} from "../../redux/actions/tomatoesActions";
import {
  fetchTomatoes,
  addProject,
  deleteProject,
} from "../../redux/actions/tomatoesActions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const styles = {
  root: {
    background: (props) =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    // border: 0,
    // borderRadius: 3,
    boxShadow: (props) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    // color: "white",
    height: 48,
    // padding: "0 30px",
    margin: 8,
  },
};
function MyButtonRaw(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
}
MyButtonRaw.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["blue", "red"]).isRequired,
};

const MyButton = withStyles(styles)(MyButtonRaw);

const SubjectDetail = (props) => {
  // const [finished, setFinshed] = useState(0);
  const dispatch = useDispatch();
  console.log({ props });
  const classes = useStyles();
  const projects = useSelector((state) => state.tomatoesReducers.projects);

  const finishedOneTask = () => {
    console.log(props.isStopping);
    props.setIsStopping(false);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className="projects">
        {projects.map((sub) => {
          return (
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                {" "}
                {/* <div className="project" key={sub.id}></div> */}
                {/* <SubjectDetail sub={sub} /> */}
                <p>Project Name: </p>
                <h1>{sub.project.toUpperCase()}</h1>
                <p>You finished</p>
                <h1>
                  {sub.finished}/{sub.tomatoes}
                </h1>
                <div className="buttons">
                  <MyButton
                    disabled={!props.isStopping}
                    color="red"
                    onClick={() => {
                      props.setUserId(sub.id);

                      return finishedOneTask();
                    }}
                  >
                    <i className="fa fa-play fa-2x" />
                  </MyButton>
                  <MyButton
                    disabled={!props.isStopping}
                    color="red"
                    onClick={() => {
                      props.setMinutes(25);
                      props.setUserId(sub.id);
                      dispatch(resetFinishingTomatoes(sub.id));
                    }}
                  >
                    RESET
                  </MyButton>

                  <MyButton
                    disabled={!props.isStopping}
                    color="red"
                    onClick={() => {
                      // setUserId(sub.id);
                      dispatch(deleteProject(sub.id));
                    }}
                  >
                    <i className="fa               fa-trash  fa-2x" />
                  </MyButton>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default SubjectDetail;
