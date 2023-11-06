import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Friend from './pages/Friend'
import Home from './pages/Home'
import My from './pages/My'
export default class App extends PureComponent {
  
  state = {
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        currentHash: window.location.hash.slice(1)
      })
    }
    )
  }
  render() {
    const {currentHash} =this.state
    return (
      <div>
        <h1>app组件</h1>
        <ul>
          <li><a href="#/home">首页</a></li>
          <li><a href="#/my">我的音乐</a></li>
          <li><a href="#/friend">我的朋友</a></li>
        </ul>
        {currentHash === '/home' && <Home></Home>}
        {currentHash === '/my' && <My></My>}
        {currentHash === '/friend' && <Friend></Friend>}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
