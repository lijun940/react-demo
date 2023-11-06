import React, { Component } from 'react'

export default class Friend extends Component {
  handleClick = () => {
    console.log('我需要登录')
    this.props.history.push('/hoem')
  }
  render() {
    return (
      <div>
        我的朋友
        <button onClick={this.handleClick}>登录</button>
      </div>
    )
   
    
  }
}
