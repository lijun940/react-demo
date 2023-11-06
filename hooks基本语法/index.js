import React, { Component, PureComponent } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
const Element = () => {
  const [count, changeCount] = useState(0)
  const [money, setMoney] = useState(100)
  useEffect(() => {
    document.addEventListener('click', function () {
      console.log('点击了')
    })
    return () => {}
  }, [])
  return (
    <div>
      <h3>我是根组件</h3>
      <div>我点击了{count}次</div>
      <div>money{money}次</div>
      <button onClick={() => changeCount(count + 1)}>+1</button>
      <button onClick={() => setMoney(money + 1)}>+money</button>
      {count < 5 ? <Child count={count} /> : '豆豆被打死了'}
    </div>
  )
}
function Child({ count }) {
  let timer
  useEffect(() => {
    console.log('执行一次effect')
    let timer = window.setInterval(() => {
      console.log('我是豆豆，别打我')
    }, 1000)
    return () => {
      console.log('clear')
      window.clearInterval(timer)
    }
  })
  return <div>我是子组件-{count}</div>
}
ReactDOM.render(<Element></Element>, document.querySelector('#root'))
