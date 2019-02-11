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
      Answers: ["a", "b", "c", "dio"],
      CorrectAnswer: 3
    };
  }
  CheckAnswer(answer) {
    var answerIndex = this.state.Answers.indexOf(answer);
    if (this.state.CorrectAnswer === answerIndex) {
      alert("Anti-Left");
    } else {
      alert("Anti-Anti-Anti-Anti-Anti-Anti-Anti-Anti-Anti-Anti-Left");
    }
    this.setState({ SelectedAnswer: answerIndex });
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
        />
      </div>
    );
  }
}
export default App;
