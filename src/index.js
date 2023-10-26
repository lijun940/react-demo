import { Component } from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Demo from "./Demo";

import './index.css'

class App extends React.Component {
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
  del = (index) => {
    const newArr = [...this.state.list.filter((item,idex) => {
      return idex !== index
    }
    )]
    this.setState({
      list: newArr
    })
  }
  
  renderList() {
      console.log(this.state.list)
      return this.state.list.length ? (
        <ul>
      {
        this.state.list.map((item, index) => (
          <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
            <button onClick={e => this.del(index)}>删除</button>
          </li>
        ))
      }
      
    </ul>
      ):(
        <div className="no-comment">暂无评论</div>

      )
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
