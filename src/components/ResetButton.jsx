import React, { Component } from "react";
import "../js/ResetButton.js";
// import components

class ResetButton extends Component {
  render() {
    return (
      <button id="ThirdBomb" onResetButtonClicked={onResetButtonClicked(click)}>
        Bite Za Dusto
      </button>
    );
  }
}

export default ResetButton;
