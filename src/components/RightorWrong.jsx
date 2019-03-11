import React, { Component } from "react";
// import components

class RightorWrong extends Component {
  render() {
    if (this.props.value === true) {
      return <div className="rightorwrong">Right </div>;
    } else {
      return <div className="rightorwrong">Wrong </div>;
    }
  }
}

export default RightorWrong;
