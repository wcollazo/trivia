import React, { Component } from "react";
import QuestionText from "./QuestionText.jsx";
import ResetButton from "./ResetButton.jsx";
import AnswerButtons from "./AnswerButtons.jsx";
import "../css/Question.css";

// import components

class Question extends Component {
  render() {
    return (
      <div>
        <p />
        <QuestionText text="Question goes here" />
        <p />
        <ResetButton />
        <p />
        <AnswerButtons className="Answers" answerChoice="1" />
        <AnswerButtons className="Answers" answerChoice="2" />
        <AnswerButtons className="Answers" answerChoice="3" />
        <AnswerButtons className="Answers" answerChoice="4" />
      </div>
    );
  }
}

export default Question;
