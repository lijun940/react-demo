import React, { Component } from "react";

export default class Rose extends Component {
  render() {
    return (
      <div>
        <h3>我是Rose</h3>-{this.props.msg}
      </div>
    );
  }
}
