import React, { Component } from 'react'

export default class Dialog extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h3>{this.props.title('你好')}</h3>
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <div>
          <button>关闭</button>
          <button>确认</button>
        </div>
      </div>
    )
  }
}
