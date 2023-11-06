import classNames from 'classnames'
import React, { Component } from 'react'

export default class TodoItem extends Component {
  state = {
    currentId: '',
    currentName: '',
  }
  inputRef = React.createRef()
  handleKeyup = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        currentId: '',
      })
    }
    if (e.keyCode === 13) {
      this.props.editTodo(this.state.currentId, this.state.currentName)
      this.setState({
        currentId: '',
      })
    }
  }
  delTodo = (id) => {
    this.props.delTodoById(id)
  }
  updateDone = (id) => {
    console.log(1)
    this.props.updateDoneById(id)
  }

  showEdit = ({ id, name }) => {
    this.setState({
      currentId: id,
      currentName: name,
    })
  }
  componentDidUpdate() {
    this.inputRef.current.focus()
  }
  render() {
    const { item } = this.props
    return (
      <li
        className={classNames({
          editing: item.id === this.state.currentId,
          completed: item.done,
        })}
        key={item.id}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.done}
            onChange={() => this.updateDone(item.id)}
          />
          <label onDoubleClick={(e) => this.showEdit(item)}>{item.name}</label>
          <button
            className="destroy"
            onClick={() => this.delTodo(item.id)}
          ></button>
        </div>
        <input
          ref={this.inputRef}
          className="edit"
          value={this.state.currentName}
          onChange={(e) => this.setState({ currentName: e.target.value })}
          onKeyUp={this.handleKeyup}
          onBlur={() => {
            this.setState({currentId: ''})
          }
          }
        />
      </li>
    )
  }
}
