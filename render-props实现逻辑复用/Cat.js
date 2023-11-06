import React, { memo } from 'react'
import jpg from './assets/1.jpg'

export default class Cat extends React.Component {
  render() {
    const { x, y } = this.props
    return (
      <div>
        <img
          src={jpg}
          alt=""
          style={{ left: x + 'px', top: y + 'px', position: 'absolute' }}
        />
      </div>
    )
  }
}
