import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './Header'
import Dialog from "./Dialog";

class App extends React.Component {
  state = {
  };
  
  render() {
    return (
        <div>
          <h1>children属性</h1>
          <Header >
            <a href="#">百度一下</a>
          </Header>
          <Header >登录</Header>
          <hr />
          <Dialog title={(value) => (<h4>{value}</h4>)}>
            <input type="text" />
          </Dialog>
        </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
