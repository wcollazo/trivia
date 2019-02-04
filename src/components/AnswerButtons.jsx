import React, { Component } from "react";
import "../css/AnswerButtons.css";

// import components

class AnswerButtons extends Component {
  render() {
    return <div className="answer">{this.props.Answers}</div>;
  }
}

export default AnswerButtons;
