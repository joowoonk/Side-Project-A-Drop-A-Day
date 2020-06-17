import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  finishingOneTomatoes,
  fetchTomatoes,
} from "../../redux/actions/tomatoesActions";
const SubjectDetail = (props) => {
  // const [finished, setFinshed] = useState(0);
  const dispatch = useDispatch();
  console.log({ props });

  return (
    <div>
      <h1>Project Name: {props.sub.project}</h1>
      <h2>
        Finished {props.sub.finished}/{props.sub.tomatoes}
      </h2>
      <button
        // disabled={props.isRunning}
        onClick={() => {
          dispatch(finishingOneTomatoes(props.sub.id));
        }}
      >
        <i className="fa fa-play fa-2x" />
      </button>{" "}
    </div>
  );
};

export default SubjectDetail;
