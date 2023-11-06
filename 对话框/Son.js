import React, { Component } from "react";
import Sun from "./Sun";
import { Consumer } from './index'
export default class Son extends Component {
  render() {
    return (
      <Consumer>
        {({color}) => {
          return (
            <div>
        <h4>我是子组件 {color}</h4>
        <Sun />
        </div>
          )
        }
        }
      </Consumer>
      
    )
  }
}
