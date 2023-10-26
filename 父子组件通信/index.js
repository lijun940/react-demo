import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/base.css'
import './styles/index.css'
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
class App extends React.Component {
  state = {
    list: [
      {id:1,name: '吃饭', done: false},
      {id:2,name: '睡觉', done: true},
      {id:3,name: '打豆豆', done: false},
    ],
    // all active completed
    type: 'all'
  }
  delTodoById = (id) => {
    this.setState({
      list: [...this.state.list.filter((item) => {
        return item.id !==id
      }
      )]
    })
  }
  updateDoneById = (id) => {
    this.setState({
      list: this.state.list.map(item => {
        return {
          ...item,
          done: item.id === id ? !item.done : item.done
        }
      })
    })
  }
  addFn = (data) => {
    const {list} = this.state
    this.setState({
      list: [{id: list.length, name: data, done: false}, ...list]
    })
  }
  editTodo = (id, name) => {
    this.setState({
      list: this.state.list.map(item => {
        return {
          ...item,
          name: item.id === id ? name : item.name
        }
      })
    })
  }
  clearTodo = () => {
    this.setState({
      list: this.state.list.filter(item => !item.done)
    })
  }
  switchType = (type) => {
    console.log(type, 1917)
    this.setState({
      type
    })
  }
  checkAll = (checked) => {
    this.setState({
      list: this.state.list.map(item => ({
        ...item,
        done: checked ? true : false
      }))
    })
  }
  
  render() {
    const {list,type} = this.state
    return (
        <section class="todoapp">
          <TodoHeader addFn={this.addFn}/>
          <TodoMain
            editTodo={this.editTodo}
            list={list}
            delTodoById={this.delTodoById}
            updateDoneById={this.updateDoneById}
            type={type}
            checkAll={this.checkAll}
          />
          <TodoFooter list={list} clearTodo={this.clearTodo} type={this.state.type} switchType={this.switchType}/>
        </section>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
