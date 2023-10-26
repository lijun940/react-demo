import React, { Component } from "react";

export default class Jack extends Component {
  say = () => {
    this.props.say("you jump i look");
  };

  render() {
    return (
      <div>
        <h3>我是Jack--{this.props.msg}</h3>
        <button onClick={this.say}>说</button>
      </div>
    );
  }
}
