import React, { Component } from "react";
import Sun from "./Sun";

export default class Son extends Component {
  render() {
    return (
      <div>
        <h4>我是子组件</h4>
        <Sun />
      </div>
    );
  }
}
