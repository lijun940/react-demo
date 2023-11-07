import React, { useContext, useState } from "react"
const Context = React.createContext()
const App = () => {
  const [color, setColor] = useState('red')
  return (
    <Context.Provider value={color}>
      <div>
        <h1>我是根组件</h1>
        <h1>颜色{color}</h1>
        <button onClick={() => {
          setColor('yellow')
        }
        }>修改</button>
        <Father></Father>
      </div>
    </Context.Provider>
    
  )
}

const Father = () => {
  const color = useContext(Context)
  return <div>
    <h3>我是父组件--{color}</h3>
    <Child></Child>
  </div>
}
const Child = () => {
  const color = useContext(Context)
  return (
    <div>
      <h5>我是子组件--{color}</h5>
    </div>
  )
}
export default App