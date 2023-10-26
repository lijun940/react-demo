import {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
  state = {
     count: 0,
     list: ['咋说', 'fdsg', 'fds3'],
     user: {
      name:'lj',
      age: 11
     }
  }
  render() {
    return (
      <div>
       <div>{this.state.count}</div>
       <button onClick={this.clickFn}>+1</button>
        <ul>
          {
            this.state.list.map(item => (
              <li key={item}>
                {item}
              </li>
            ))
          }
        </ul>
        <button onClick={this.add}>增加数据</button>
        <button onClick={this.remove}>删除数据</button>
        <span>{this.state.user.name}-{this.state.user.age}</span>
        <button onClick={this.editPerson}>修改对下</button>
      </div>
    )
  }
  clickFn = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  add = () => {
    this.setState({
      list: [...this.state.list, 'zszs']
    })
  }
  remove = () => {
    this.setState({
      list: [...this.state.list.filter(item => item !== 'zszs')]
    })
  }
  
  editPerson = () => {
    this.setState({
      user: {
        ...this.state.user,
        name: 'lew'
      }
    })
  }
  
  
  
}
ReactDOM.render(<App/>, document.querySelector('#root'))