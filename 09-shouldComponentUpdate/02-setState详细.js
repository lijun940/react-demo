import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class App extends Component {
  state = {
    count: 0
  }
  handleClick = () => {
    // state保证是最新的state
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    }
    )
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    },() => {
      console.log(this.state.count)
    }
    
    )
  }
  
  render() {
    return (
      <div>
        123
        {this.state.count}
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
