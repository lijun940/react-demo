import {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
  state = {
    username: '',
    desc: '',
    city: 3,
    agree: false
  }
  render() {
    return (
      <div>
        <h1>受控组件</h1>
        <h3>文本框</h3>
        <div>
          姓名
          <input type="text"
          name="username"
          value={this.state.username} onChange={this.handleChange}/>
        </div>
        <h3>文本域</h3>
        <div>
          desc
          <textarea name="desc" id="" cols="30" rows="10" value={this.state.desc} onChange={this.handleChange}></textarea>
        </div>
        <h3>下拉框</h3>
        <div>
          选择城市
          <select name='city' value={this.state.city} onChange={this.handleChange}>
            <option value='1'>北京</option>
            <option value='2'>上海</option>
            <option value='3'>杭州</option>
            <option value='4'>深圳</option>
            <option value='5'>广州</option>
          </select>

        </div>
        <h3>
          <div>
            <input name='agree' type="checkbox"  checked={this.state.agree} onChange={this.handleChange}/>
            是否已经阅读了我们的协议
          </div>
        </h3>
      </div>
    )
  }
  handleChange = (e) => {
    const {name, value, type, checked} = e.target
    this.setState({
      [name]: type === 'checkbox' ? checked:value
    })
  }
  
  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  changeDesc = (e) => {
    this.setState({
      desc: e.target.value
    })
  }
  changeCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }
  changeAgree = (e) => {
    this.setState({
      agree: e.target.checked
    })
  }
  
  
  
  
 
}
ReactDOM.render(<App/>, document.querySelector('#root'))