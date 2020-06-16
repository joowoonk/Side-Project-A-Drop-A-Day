import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTomatoes, addSubject } from "../../redux/actions/tomatoesActions";
import "./subject.styles.scss";
import { finishedOneTomatoes } from "../../redux/actions/tomatoesActions";
import SubjectDetail from "../SubjectDetail/SubjectDetail";

const Subject = (props) => {
  const dispatch = useDispatch();
  const tomatoes = useSelector((state) => state.tomatoesReducers.tomatoes);

  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const finishedState = useSelector((state) => state.tomatoesReducers);
  const isFetching = useSelector((state) => state.tomatoesReducers.isFetching);
  useEffect(() => {
    dispatch(fetchTomatoes());
  }, []);
  // console.log({ props });

  // let elem = "<h1>HI</h2>";

  // elem.appendChild(elemText);

  // const changeColor = () => {
  //   setColor("red");
  //   setTextColor("black");
  //   if (color === "red" && textColor === "black") {
  //     setColor("white");
  //     setTextColor("black");
  //   }
  // };

  const finishedOneTask = (e) => {
    e.preventDefault();
  };
  console.log({ finishedState });
  const startWorking = () => {};
  // console.log({ elem });
  return (
    <div>
      {isFetching ? (
        <>
          {tomatoes.map((sub) => {
            return (
              <div className="project" key={sub.id}>
                <SubjectDetail sub={sub} />
                {/* <h1>Project Name: {sub.subject}</h1> */}
                {/* <h2> */}
                {/* Finished {finished}/{sub.tomatoes} */}
                {/* </h2> */}
                {/* <button
                  disabled={props.isRunning}
                  onClick={() => {
                    dispatch(finishedOneTomatoes(sub.id));
                    // dispatch(fetchTomatoes());
                  }}
                >
                  <i className="fa fa-play fa-2x" />
                </button> */}
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h1>Fetching...</h1>
        </>
      )}
    </div>
  );
};

export default Subject;

// {tomatoes.map((tom) => {
//   {
//     /* <button style={{background:color,color:textColor}} className='btn btn-primary' onClick={()=>{setColor("black");setTextColor('red')}}>Click here</button> */
//   }
//   return (
//     <button
//       style={{ backgroundColor: color, color: textColor }}
//       className="subjectbox"
//       onClick={() => {
//         changeColor();
//       }}
//     >
//       x
//     </button>
//   );
// })}
