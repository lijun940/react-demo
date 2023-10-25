import { Component } from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Demo from "./components/Demo";

class App extends Component {
  state = {
    msg: "hello",
    count: 0,
  };
  render() {
    return (
      <div>
        <h1>我是跟组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>+1</button>
      </div>
    );
  }
  clickFn = () => {
    console.log("点击事件", this);
  };
  mouseFn() {
    console.log("鼠标进入事件");
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
