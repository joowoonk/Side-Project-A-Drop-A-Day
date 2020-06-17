import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInformation } from "../../redux/actions/userActions";
import { addProject } from "../../redux/actions/tomatoesActions";
import { fetchTomatoes } from "../../redux/actions/tomatoesActions";

const SubjectForm = () => {
  const [subject, setSubject] = useState("");
  const [tomatoesNumber, setTomatoesNumber] = useState(0);
  const dispatch = useDispatch();
  const useinfo = useSelector((state) => state.userReducer.user[0]);
  const onInputSubject = (e) => {
    setSubject(e.target.value);
  };
  const onInputTomatoes = (e) => {
    setTomatoesNumber(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addProject(subject, tomatoesNumber, useinfo.id));
    // await dispatch(fetchTomatoes());
  };

  useEffect(() => {
    dispatch(userInformation());
  }, []);

  // console.log({ useinfo });

  return (
    <div>
      <form className="tomatoesForm">
        <div className="subject">
          <label htmlFor="subject">
            <h3>Subject of Your Project:</h3>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={onInputSubject}
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

export default SubjectForm;
