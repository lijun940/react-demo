import TodoMain from './components/TodoMain2'
import TodoHeader from './components/TodoHeader2'
import TodoFooter from './components/TodoFooter2'
import './styles/base.css'
import './styles/index.css'
import { useEffect, useState } from 'react'
import React from 'react'
const todos = [
  {
    id: 1,
    name: '学习hooks',
    done: false,
  },
  {
    id: 2,
    name: '学习r',
    done: false,
  },
  {
    id: 3,
    name: '学习a',
    done: true,
  },
]
export const context = React.createContext()
const inital = JSON.parse(sessionStorage.getItem('list'))
const App = () => {
  const { Provider } = context
  const [list, setList] = useState(inital)
  const [current, setCurrent] = useState({
    id: '',
    name: '',
  })
  useEffect(() => {
    sessionStorage.setItem('list', JSON.stringify(list))
  }, [list])
  const delItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }
  const changeDone = (id) => {
    setList(
      list.map((item) => ({
        ...item,
        done: item.id === id ? !item.done : item.done,
      }))
    )
  }
  const showEdit = (item) => {
    setCurrent({
      id: item.id,
      name: item.name,
    })
  }
  return (
    <Provider
      value={{
        delItem,
        changeDone,
        showEdit,
        current,
        setCurrent,
      }}
    >
      <section className="todoapp">
        <TodoHeader />
        <TodoMain list={list} />
        <TodoFooter />
      </section>
    </Provider>
  )
}

export default App
