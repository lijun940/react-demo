import { Component } from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Demo from "./Demo";

class App extends Component {
  state = {
    money: 100,
  };
  buySth = () => {
    this.setState({
      money: this.state.money + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>我是app组件</h1>
        <button onClick={this.buySth}>买烟</button>
        <Demo
          car="小黄车"
          money={this.state.money}
          user={{ name: "lj", age: 10 }}
          fn={() => {
            console.log("fn函数");
          }}
          content={<div>我是内容</div>}
        />
        <Hello car="小黄车" money={100} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
