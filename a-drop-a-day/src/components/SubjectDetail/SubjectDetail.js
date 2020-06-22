import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteProject } from "../../redux/actions/tomatoesActions";

import "./subject-detail.styles.scss";
import { resetFinishingTomatoes } from "../../redux/actions/tomatoesActions";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";

import { styles, useStyles } from "./SubjectDetail.styles";
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
  const dispatch = useDispatch();

  const [option, setOption] = useState(false);
  const [hidden, setHidden] = useState(false);

  const classes = useStyles();

  const finishedOneTask = () => {
    props.setIsStopping(false);
  };

  return (
    <Paper
      className={classes.paper}
      style={
        {
          // marginTop: 10,
          // width: 400,
          // color: "red",
          // marginLeft: "5%",
          // marginRight: "5%",
          // paddingRight: "80%",
        }
      }
    >
      <p>Project Name: </p>
      <h1>{props.sub.project.toUpperCase()}</h1>
      You finished
      <h1>
        {props.sub.finished}/{props.sub.tomatoes}
      </h1>
      <div className="buttons">
        <MyButton
          disabled={!props.isStopping}
          color="red"
          onClick={() => {
            props.setUserId(props.sub.id);
            props.setFocusTime(true);

            return finishedOneTask();
          }}
        >
          <i className="fa fa-play fa-2x" />
        </MyButton>
        {!hidden && (
          <MyButton
            disabled={!props.isStopping}
            color="red"
            onClick={() => {
              // props.setMinutes(25);
              props.setUserId(props.sub.id);
              setOption(true);
              setHidden(true);
              // dispatch(resetFinishingTomatoes(sub.id));
            }}
          >
            <i className="fa fa-wrench fa-2x" />
          </MyButton>
        )}

        {option && (
          <>
            <MyButton
              disabled={!props.isStopping}
              color="red"
              onClick={() => {
                props.setMinutes(25);
                props.setUserId(props.sub.id);
                dispatch(resetFinishingTomatoes(props.sub.id));
              }}
            >
              RESET PROGRESS
            </MyButton>

            <MyButton
              disabled={!props.isStopping}
              color="red"
              onClick={() => {
                // setUserId(sub.id);
                dispatch(deleteProject(props.sub.id));
              }}
            >
              <i className="fa               fa-trash  fa-2x" />
            </MyButton>
          </>
        )}
      </div>
    </Paper>
  );
};

export default SubjectDetail;
