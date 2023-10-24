import ReactDOM from 'react-dom'
import './index.css'
import classNames from 'classnames'
const isRed = true
const isPink = true
// function classNames(obj) {
//   return Object.keys(obj).filter(key => obj[key]).join(' ')
// }
const element = (
  <div>
    <h1 className={classNames({box: true, red: isRed, pink: isPink})}>
      我是标题
    </h1>
  </div>
)
ReactDOM.render(element, document.getElementById('root'))