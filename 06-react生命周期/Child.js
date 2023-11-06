import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('打我')
    }, 1000
    )
  }
  componentDidUpdate() {
    console.log('son update')
  }
  componentWillUnmount() {
    console.log('son unmount')
    clearInterval(this.timer)
  }
}
