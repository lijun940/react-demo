import React, { Component, PureComponent } from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    let isCancel = false
    const fn = async () => {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels')
      !isCancel && setList(res.data.data.channels)
    }
    fn()
    return () => {
      isCancel = true
    }
  }, [])
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}
ReactDOM.render(<App></App>, document.querySelector('#root'))
