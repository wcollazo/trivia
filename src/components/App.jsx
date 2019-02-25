import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import { buildFirebase } from "../clients/firebase";

var firebaseDatabase = buildFirebase();
// import components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionText: "rerorerorerorero",
      questionText2: "licklicklicklick",
      Answers: ["a", "b", "c", "dio"],
      Answers2: ["e", "f", "g", "Hell 2 U!"],
      CorrectAnswer: 3,
      value: true,
      words: ""
    };
  }
  CheckAnswer(answer) {
    var answerIndex = this.state.Answers.indexOf(answer);
    if (this.state.CorrectAnswer === answerIndex) {
      this.setState({ value: true });
    } else {
      this.setState({ value: false });
    }
    this.setState({ SelectedAnswer: answerIndex });
  }

  onResetButtonClicked() {
    // Add things here!
  }

  render() {
    return (
      <div className="app">
        Trivia!
        <Question
          questionText={this.state.questionText}
          Answers={this.state.Answers}
          CheckAnswer={answer => this.CheckAnswer(answer)}
          SelectedAnswer={this.state.SelectedAnswer}
          CorrectAnswer={this.state.CorrectAnswer}
          value={this.state.value}
          words={this.state.words}
        />
      </div>
    );
  }
}
export default App;
