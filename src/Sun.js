import React, { Component } from "react";
import { Consumer } from "./index";

export default class Sun extends Component {
  render() {
    return (
      <div>
        <Consumer>{(value) => <h5>我是孙组件{value}</h5>}</Consumer>
      </div>
    );
  }
}
