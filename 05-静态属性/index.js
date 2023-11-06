import React, { Component } from "react";
import ReactDOM from "react-dom";
import Son from "./Son";

class App extends React.Component {
  state = {
  };
  
  render() {
    return (
        <div>
         <h3>props校验</h3>
         <Son money={100} list={[]} car={{brand:100,price: 'fz'}}/>
        </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
