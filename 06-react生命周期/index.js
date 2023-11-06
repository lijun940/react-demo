import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'
export default class App extends Component {
  constructor(props) {
    super(props)
    console.log(1, 'constructor')
    this.state = {
      msg: '123',
      count: 0
    }
    this.inputRef = React.createRef()
  }
  render() {
    console.log(2, 'render')
    return (
      <div>
        App组件
        <button onClick={this.handleClick}>更细</button>
        <input type="text" value={this.state.msg} onClick={() => this.setState({})}/>
        <div>{this.state.count}</div>
        {this.state.count < 6 && <Child count={this.state.count} />}
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      count: this.state.count+1
    })
    // this.forceUpdate()
  }
  
  componentDidMount() {
    console.log(3, 'componentDidMount')
  }
  componentDidUpdate() {
    console.log(4, 'componentDidUpdate')
  }
}
ReactDOM.render(<App/>,document.querySelector('#root'))