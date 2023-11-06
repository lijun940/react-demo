import React, { Component } from 'react'

export default class Son2 extends Component {
  render() {
    console.log('Son2 render')
    return (
      <div>
        Son2{this.props.car}
      </div>
    )
  }
}
