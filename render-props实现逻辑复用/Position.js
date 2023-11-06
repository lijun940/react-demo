import React, { Component } from 'react'

export default class Position extends Component {
  render() {
    const { x, y } = this.props
    return (
      <div>
        <h3>当前鼠标的位置</h3>
        <div>{x}</div>-<div>{y}</div>
      </div>
    )
  }
}
