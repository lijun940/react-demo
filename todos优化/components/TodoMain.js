import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoItem from './TodoItem'
export default class TodoMain extends Component {
  static propTypes = {
    prop: PropTypes,
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
        checked={list.every(item => item.done)}
        onChange={this.handleChange}
      />
        <label for="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showList.map((item) => {
            return (
              <TodoItem key={item.id} item={item} {...this.props}/>
            )
          })}
        </ul>
      </section>
    )
  }
}
