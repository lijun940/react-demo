import ReactDOM from 'react-dom'
const color = 'red'
const bgColor = 'pink'
// style标签，如果是长度单位，可以使用数字类型
const element = <div>
  <h1 style={{color,fontSize: 33}}>通过style控制样式</h1>
  <p>是金子总会发光得</p>
</div>

ReactDOM.render(element, document.getElementById('root'))