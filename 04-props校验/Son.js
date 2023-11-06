import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Son extends Component {
  render() {
    return (
      <div>
        <div>我的金钱：{this.props.money + 100}</div>
        <ul>
          {
            this.props.list.map(item => <li key={item}>{item}</li>)
          }
        </ul>
        <div>
          {this.props.car.brand}={this.props.car.price}
        </div>
        <div>{this.props.name}</div>
      </div>
    )
  }
}
Son.propTypes = {
  money: PropTypes.number.isRequired,
  list: PropTypes.array,
  car: PropTypes.shape({
    brand: PropTypes.string,
    price: PropTypes.number
  })
}
Son.defaultProps = {
  name: '儿子'
}