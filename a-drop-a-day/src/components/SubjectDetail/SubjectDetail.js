import React, { useState } from "react";

const SubjectDetail = (props) => {
  const [finished, setFinshed] = useState(0);
  console.log({ props });
  return (
    <div>
      <h1>Project Name: {props.sub.subject}</h1>
      <h2>
        Finished {finished}/{props.sub.tomatoes}
      </h2>
      <button
        // disabled={props.isRunning}
        onClick={() => {
          // dispatch(finishedOneTomatoes(props.sub.id));
          // dispatch(fetchTomatoes());
          setFinshed(finished + 1);
        }}
      >
        <i className="fa fa-play fa-2x" />
      </button>{" "}
    </div>
  );
};

export default SubjectDetail;
