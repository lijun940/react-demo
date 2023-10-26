import {Component} from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'
import Demo from './components/Demo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'hello',
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h1>我是跟组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.querySelector('#root'))