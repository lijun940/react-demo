import React, { Component } from "react";
import ReactDOM from "react-dom";
import Father from "./Father";
const { Provider, Consumer } = React.createContext();
export { Consumer };
class App extends React.Component {
  state = {
    msg: "",
    color: "red",
  };

  render() {
    return (
      <Provider value={this.state.color}>
        <div>
          我是app组件
          <Father />
        </div>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
