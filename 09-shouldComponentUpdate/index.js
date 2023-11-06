import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Parent from './Parent'
export default class App extends PureComponent {
  state = {
    list: ['如花', '凤姐', '巧碧螺'],
    current: 0
  }
  random = () => {
    this.setState({
      current: (Math.random() * this.state.list.length) | 0
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(this.state.current === nextState.current) {
  //     return false
  //   } else  {
  //     return true
  //   }
  // }
  render() {
    console.log('app render')
    return (
      <div>
        <h1>app组件</h1>
        <div>女朋友：{this.state.list[this.state.current]}</div>
        <button onClick={this.random}>随机</button>
        <Parent></Parent>
        <button onClick={() => {
          this.setState({})          
        }
        }>11</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
