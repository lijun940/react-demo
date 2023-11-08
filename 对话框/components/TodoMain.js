import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
export default class TodoMain extends Component {
  static propTypes = {
    prop: PropTypes,
  }
  state = {
    currentId: '',
    currentName: ''
  }
  delTodo = (id) => {
    this.props.delTodoById(id)
  }
  updateDone = (id) => {
    console.log(1)
    this.props.updateDoneById(id)
  }
  
  showEdit = ({id,name}) => {
    this.setState({
      currentId: id,
      currentName:name
    })
  }
  handleKeyup = (e) => {
    if(e.keyCode === 27) {
      this.setState({
        currentId: '',
      })
    }
    if(e.keyCode === 13) {
      this.props.editTodo(this.state.currentId,this.state.currentName)
      this.setState({
        currentId: '',
      })
    }
  }
  handleChange = (e) => {
    this.props.checkAll(e.target.checked)
  }
  
  
  render() {
    const { list, type } = this.props
    console.log(type, 1916)
    let showList = []
    if (type === 'active') {
      showList = list.filter(item => !item.done)
    } else if(type === 'completed') {
      showList = list.filter(item => item.done)
    } else {
      showList = list
    }
    return (
      <section className="main">
        <input id="toggle-all" 
        className="toggle-all" 
        type="checkbox" 
        checked={list?.every(item => item.done)}
        onChange={this.handleChange}
      />
        <label for="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showList.map((item) => {
            return (
              <li className={classnames({
                editing: item.id === this.state.currentId,
                completed: item.done
              })} key={item.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={item.done} onChange={() => this.updateDone(item.id)} />
                  <label onDoubleClick={e => this.showEdit(item)}>{item.name}</label>
                  <button className="destroy" onClick={() => this.delTodo(item.id)}></button>
                </div>
                <input className="edit" value={this.state.currentName} onChange={e => this.setState({currentName: e.target.value})} onKeyUp={this.handleKeyup}/>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}
