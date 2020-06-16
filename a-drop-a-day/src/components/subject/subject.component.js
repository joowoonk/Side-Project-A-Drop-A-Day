import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTomatoes } from "../../redux/actions/tomatoesActions";
import "./subject.styles.scss";

const Subject = ({ setIsRunning, isRunning }) => {
  const dispatch = useDispatch();
  const tomatoes = useSelector((state) => state.tomatoesReducers.tomatoes);
  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const finsihedState = useSelector((state) => state.tomatoesReducers);
  const isFetching = useSelector((state) => state.tomatoesReducers.isFetching);
  useEffect(() => {
    dispatch(fetchTomatoes());
  }, []);

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
  console.log({ finsihedState });
  // console.log({ elem });
  return (
    <div>
      {isFetching ? (
        <>
          {tomatoes.map((sub) => {
            return (
              <div className="project" key={sub.id}>
                <h1>Project Name: {sub.subject}</h1>
                <h2>
                  Finished {sub.finished}/{sub.tomatoes}
                </h2>
                <button onClick={() => setIsRunning(!isRunning)}>Start</button>
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
