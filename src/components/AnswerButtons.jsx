import React, { Component } from "react";
import "../css/AnswerButtons.css";

// import components

class AnswerButtons extends Component {
  answerClick() {
    this.props.CheckAnswer(this.props.Answers);
  }
  coloringAnswers() {
    if (SelectedAnswer === CorrectAnswer) {
      console.log("CorrectAnswer turns green");
    } else if (SelectedAnswer != CorrectAnswer) {
      console.log("SelectedAnswer turns red");
    }
  }
  render() {
    return (
      <div onClick={() => this.answerClick()} className="answer">
        {this.props.Answers}
      </div>
    );
  }
}

export default AnswerButtons;
