import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

class App extends React.Component {
  state = {
    list: [
      {
        id: 1,name: '王思聪', content: '想你的夜'
      },
      {
        id: 2,name: '王健林', content: '定一个小目标'
      },
      {
        id: 3,name: '马云', content: '我的确不感兴趣'
      },
    ]
  }
  clear = () => {
    this.setState({
      list: [],
      name: '',
      content: ''
    }
    )
  }
  submit = () => {
    const {name,content} = this.state
    if(!name || !content) {
      alert('请输入')
      return
    }
    const newItem = {
      id: this.state.list[this.state.list.length - 1] + 1,
      name,
      content
    }
    this.setState({
      list: [newItem,...this.state.list]
    })
    this.setState({
      name: '',
      content: ''
    })
  }
  
  handleChange = (e) => {
    const {name,value,checked, type} = e.target
    this.setState({
        [name]: type === 'checkbox' ? checked:value
    })
  }
  
  render() {
    return (
      <div className="app">
        <div>
          <input name='name' className="user" type="text" placeholder="请输入评论人" value={this.state.name} onChange={this.handleChange}/>
          <br />
          <textarea
          name='content'
          onChange={this.handleChange}
            value={this.state.content}
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
          />
          <br />
          <button onClick={this.submit}>发表评论</button>
          <button onClick={this.clear}>清空评论</button>
        </div>
        {this.renderList()}
        
      </div>
    )
  }
  del = (index) => {
    const newArr = [...this.state.list.filter((item,idex) => {
      return idex !== index
    }
    )]
    this.setState({
      list: newArr
    })
  }
  
  renderList() {
      console.log(this.state.list)
      return this.state.list.length ? (
        <ul>
      {
        this.state.list.map((item, index) => (
          <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
            <button onClick={e => this.del(index)}>删除</button>
          </li>
        ))
      }
      
    </ul>
      ):(
        <div className="no-comment">暂无评论</div>

      )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
