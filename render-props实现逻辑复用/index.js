import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Cat from './Cat'
import Position from './Position'
import Mouse from './Mouse'
import Scroll from './Scroll'
const Element = () => {
  return (
    <div style={{ height: 1000 }}>
      <Scroll>
        {({ left, top }) => {
          return (
            <div style={{ position: 'fixed', top: 0 }}>
              {left}-{top}
            </div>
          )
        }}
      </Scroll>
    </div>
  )
}

ReactDOM.render(<Element></Element>, document.querySelector('#root'))
