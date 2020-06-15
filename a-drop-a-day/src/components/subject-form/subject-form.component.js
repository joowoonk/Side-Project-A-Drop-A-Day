import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSubject } from "../../redux/actions/tomatoesActions";

const subjectForm = () => {
  const [title, setTitle] = (useState = useState(""));
  const [tomatoesNumber, setTomatoesNumber] = useState(0);
  const dispatch = useDispatch();

  const onInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const onInputTomatoes = (e) => {
    setTomatoesNumber(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addSubject(title, tomatoesNumber));
  };

  return (
    <div>
      <form className="tomatoesForm">
        <div className="title">
          <label htmlFor="title">
            <h3>Title of Your Project:</h3>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={onInputTitle}
            />
          </label>
        </div>
        <label htmlFor="tomatoes">
          <div className="tomatoes">
            <h3>Number of Tomatoes:</h3>
            <input
              type="number"
              id="tomatoes"
              name="tomatoes"
              max="24"
              value={tomatoesNumber}
              onChange={onInputTomatoes}
            />
          </div>
        </label>
        <button onClick={handleSubmit}>Add To My Project</button>
      </form>
    </div>
  );
};

export default subjectForm;
