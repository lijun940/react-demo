import { Component } from "react"

export default class Child extends Component{
  state = {
    wName: ''
  }
  changeWname = (e) => {
    this.setState({
      wName: e.target.value
    })
    this.props.changeErxifu(e.target.value)
  }
  
  render() {
    return  (
      <div>
        <h3>我是子组件</h3>
        <div>mm:{this.props.mName}</div>
        <div>配偶的名字: <input type="text" value={this.state.wName} onChange={this.changeWname}/></div>
      </div>
    )
  }
  
}