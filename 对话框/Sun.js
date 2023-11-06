import React, { Component } from "react";
import { Consumer } from "./index";

export default class Sun extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {
            ({color,changeColor}) => 
            (
              <div>
                <h5>我是孙组件{color}</h5>
            <button onClick={() => changeColor('yellow')}>修改颜色</button>
              </div>
            )
          }
        </Consumer>
      </div>
    );
  }
}
