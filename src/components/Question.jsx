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
        <AnswerButtons
          CheckAnswer={this.props.CheckAnswer}
          className="Answers"
          AnswerID={0}
          Answers={this.props.Answers[0]}
          SelectedAnswer={this.props.SelectedAnswer}
          CorrectAnswer={this.props.CorrectAnswer}
        />
        <AnswerButtons
          CheckAnswer={this.props.CheckAnswer}
          className="Answers"
          AnswerID={1}
          Answers={this.props.Answers[1]}
          SelectedAnswer={this.props.SelectedAnswer}
          CorrectAnswer={this.props.CorrectAnswer}
        />
        <AnswerButtons
          CheckAnswer={this.props.CheckAnswer}
          className="Answers"
          AnswerID={2}
          Answers={this.props.Answers[2]}
          SelectedAnswer={this.props.SelectedAnswer}
          CorrectAnswer={this.props.CorrectAnswer}
        />
        <AnswerButtons
          CheckAnswer={this.props.CheckAnswer}
          className="Answers"
          AnswerID={3}
          Answers={this.props.Answers[3]}
          SelectedAnswer={this.props.SelectedAnswer}
          CorrectAnswer={this.props.CorrectAnswer}
        />
      </div>
    );
  }
}

export default Question;
