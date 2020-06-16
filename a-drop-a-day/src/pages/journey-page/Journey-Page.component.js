import React from "react";
import Timer from "../../components/timer/timer";
import SubjectForm from "../../components/subject-form/subject-form.component";
import Subject from "../../components/subject/subject.component";
const JourneyPage = () => {
  //make sure to create a form where a user can add their subject with a tomato

  //as tomato ripes a selected subject in a limited of amount tomatoes per subject has.
  // might need to create a component that has a subject
  // in that subject component, should have a trace of blank boxes to check per tomato
  //mapping through length of tomatoes and produce boxes that has colorless color then fill up per tomato
  //might need to use passing down the state and if subject.id met then it will fill.
  // probably need to find a way to disabled play button in timer component so it wont trigger to start without start from the subject.
  return (
    <div>
      <Timer />
    </div>
  );
};

export default JourneyPage;
