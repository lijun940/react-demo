import {Component} from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'
import Demo from './components/Demo'

const element = (
  <div>
    <h1>函数组件</h1>
    <Hello/>
    <Demo/>
  </div>
)

ReactDOM.render(element, document.querySelector('#root'))