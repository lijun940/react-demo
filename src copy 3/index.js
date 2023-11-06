import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Friend from './pages/Friend'
import Home from './pages/Home'
import My from './pages/My'
import './index.css'
import {Redirect,BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'
export default class App extends PureComponent {

  render() {
   return(
    <Router>
      {/* <div>
      <h1>app组件</h1>
      <ul>
        <li>
          <NavLink excat to='/'>首页</NavLink>
        </li>
        <li>
          <NavLink to='/home' activeClassName='aa'>首页</NavLink>
        </li>
        <li>
          <NavLink to='/my'>我的音乐</NavLink>
        </li>
        <li>
          <NavLink to='/friend'>我的朋友</NavLink>
        </li>
      </ul>
      <Switch>
        <Redirect excat from='/' to='/home'></Redirect>
      <Route path='/home' component={Home}/>
      <Route path='/my' component={My}/>
      <Route path='/friend' component={Friend}/>
      <Route component={NotFound}></Route>
      </Switch>
      
    </div> */}
     <ul>
          <li>
            <Link to='/detail/1'>商品1</Link>
          </li>
          <li>
            <Link to='/detail/2'>商品2</Link>
          </li>
          <li>
            <Link to='/detail/3'>商品3</Link>
          </li>
        </ul>
        <Route path='/detail/:id' component={Detail}/>
    </Router>
    
   )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
