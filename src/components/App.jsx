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
      Answers: ["a", "b", "c", "dio"]
    };
  }

  render() {
    return (
      <div className="app">
        Trivia!
        <Question
          questionText={this.state.questionText}
          Answers={this.state.Answers}
        />
      </div>
    );
  }
}
export default App;
