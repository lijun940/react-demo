import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        404
        <Link to="/" />
      </div>
    )
  }
}
