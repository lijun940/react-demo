import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Scroll extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }
  state = {
    top: 0,
    left: 0,
  }
  scroll = () => {
    this.setState({
      top: window.pageXOffset,
      left: window.pageYOffset,
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
  }
  render() {
    return this.props.children(this.state)
  }
}
