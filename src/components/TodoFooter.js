import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoFooter extends Component {
  static propTypes = {
    prop: PropTypes,
  }
  clearTodo = () => {
    this.props.clearTodo()
  }
  switchType = (e) => {
    let type
    switch (e.target.hash) {
      case '#/':
        type = 'all'
        break;
      case "#/active":
        type = 'active'
        break;
      case "#/completed":
        type = 'completed'
        break;
      default:
        break;
    }
    console.log(type, 1918)
    this.props.switchType(type)
  }
  
  render() {
    const {list, type} = this.props
    if(!list.length) return null
    const leftCount = list.filter(item => !item.done).length
    const isShow = list.some(item => item.done)
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{leftCount}</strong> item left
        </span>
        <ul className="filters" onClick={this.switchType}>
          <li>
            <a className={type === 'all' ? "selected": ''} href="#/">
              All
            </a>
          </li>
          <li>
            <a className={type === 'active' ? "selected": ''} href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed" className={type === 'completed' ? "selected": ''}>Completed</a>
          </li>
        </ul>
        {
          isShow && <button className="clear-completed" onClick={this.clearTodo}>Clear completed</button>
        }
      </footer>
    )
  }
}
