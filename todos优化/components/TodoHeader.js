import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoHeader extends Component {
  static propTypes = {
    prop: PropTypes
  }
  state = {
    name: ''
  }
  addTodo = (e) => {
    if(e.keyCode !== 13) return null
    let {name} = this.state
    name = name.trim()
    if(!name && name !== 0) {
      alert('请输入值')
      return
    }
    this.props.addFn(name)
    this.setState({
      name: ''
    })
  }
  
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autofocus
          value={this.state.name}
          onChange={e => this.setState({
            name: e.target.value
          })}
          onKeyUp={(e) => this.addTodo(e)}
        />
      </header>
    )
  }
}
