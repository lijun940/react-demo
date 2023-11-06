import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(object)
  }
  
  render() {
    return (
      <div>
        <h1>app组件</h1>
        <div>点击次数：{this.state.count}</div>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}
