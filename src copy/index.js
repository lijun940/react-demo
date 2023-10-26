
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/* 
  1.通过react.createRef创建ref
*/
class Form extends Component {
  render() {
    return <div>form组件</div>
  }
  validate() {
    console.log('我会进行')
  }
}
class App extends Component {
  txtRef = React.createRef()
  fn = () => {
    console.log(this.txtRef.current.validate())
  }
  
  render() {
    return (
      <div>
        <h1>常见的受控组件</h1>
        <h3>文本框</h3>
        <Form ref={this.txtRef}></Form>
        <button onClick={this.fn}>获取值</button>
      </div>
      
    )
  }
 
}
ReactDOM.render(<App/>, document.querySelector('#root'))