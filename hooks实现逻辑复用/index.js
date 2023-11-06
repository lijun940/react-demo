import React, { Component, PureComponent } from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import jpg from './assets/1.jpg'
import { useState } from 'react'
import useMouse from './hooks/useMouse'
import useScroll from './hooks/useScroll'

const Cat = () => {
  const [point, setPosition] = useMouse()
  const { top, left } = useScroll()
  return (
    <>
      <img
        src={jpg}
        alt=""
        style={{ position: 'absolute', left: point.x, top: point.y }}
      />
      <div>
        left{left}-top{top}
      </div>
    </>
  )
}
ReactDOM.render(<Cat></Cat>, document.querySelector('#root'))
