import React, { Component } from 'react'

export default class Son1 extends Component {
  render() {
    console.log('son1 render')
    return (
      <div>
        Son1-{this.props.money}
      </div>
    )
  }
  shouldComponentUpdate(nextProps) {
    console.log(this.props)
    console.log(nextProps)
    if(this.props.money === nextProps.money) {
      return false
    }
    return true
  }
}
