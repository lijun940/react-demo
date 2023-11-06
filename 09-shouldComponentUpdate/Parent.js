import React, { Component } from 'react'
import Son2 from './Son2'
import Son1 from './Son1'

export default class Parent extends Component {
  state = {
    money: 100,
    car: '小黄车'
  }
  render() {
    const {money,car} = this.state
    console.log('parent render')
    return (
      <div>
        <h2>parent</h2>
        <Son2 car={car}/>
        <Son1 money={money}/>
        <button onClick={() => {
          this.setState({
            money: 200
          })
        }
        }>改钱</button>
        <button onClick={() => {
          this.setState({
            car: '宝马'
          })
        }}>改车</button>
      </div>
    )
  }
}
