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
        <QuestionText questionText={this.props.questionText} />
        <p />
        <ResetButton />
        <p />
        <AnswerButtons className="Answers" Answers={this.props.Answers[0]} />
        <AnswerButtons className="Answers" Answers={this.props.Answers[1]} />
        <AnswerButtons className="Answers" Answers={this.props.Answers[2]} />
        <AnswerButtons className="Answers" Answers={this.props.Answers[3]} />
      </div>
    );
  }
}

export default Question;
