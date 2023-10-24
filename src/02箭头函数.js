import ReactDOM from 'react-dom'

// react 组件名字必须返回一段结构
const Hello = () => {
  return <div>我是箭头函数组件</div>
}
const element = (
  <div>
    <h1>函数组件</h1>
    <Hello/>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))