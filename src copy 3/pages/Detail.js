import React, { Component } from 'react'
import { BrowserRouter as Router,Link, Route } from 'react-router-dom'
export default class Detail extends Component {
  render() {
    const {match} = this.props
    return (
      <div>
        <h3>商品详情</h3>
       {match.params.id}id
      </div>
    )
  }
}
