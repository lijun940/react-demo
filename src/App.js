import TodoMain from "./components/TodoMain2";
import TodoHeader from "./components/TodoHeader2";
import TodoFooter from "./components/TodoFooter2";
import "./styles/base.css";
import "./styles/index.css";
import { useEffect, useState, useRef } from "react";
import React from "react";
function useTodos() {
  const [list, setList] = useState(inital);
  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const delItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  const changeDone = (id) => {
    setList(
      list.map((item) => ({
        ...item,
        done: item.id === id ? !item.done : item.done,
      }))
    );
  };
  const changeName = ({ id, name }) => {
    setList(
      list.map((item) => ({
        ...item,
        name: item.id === id ? name : item.name,
      }))
    );
  };
  const addTodo = (name) => {
    setList([{ id: Date.now(), name, done: false }, ...list]);
  };
  return {
    list,
    delItem,
    changeDone,
    changeName,
    addTodo,
  };
}
const todos = [
  {
    id: 1,
    name: "学习hooks",
    done: false,
  },
  {
    id: 2,
    name: "学习r",
    done: false,
  },
  {
    id: 3,
    name: "学习a",
    done: true,
  },
];
export const context = React.createContext();
const inital = JSON.parse(sessionStorage.getItem("list")) || todos;
const App = () => {
  const myRef = useRef(null);
  const { Provider } = context;
  const [current, setCurrent] = useState({
    id: "",
    name: "",
  });
  const [type, setType] = useState("all");

  const showEdit = (item) => {
    setCurrent({
      id: item.id,
      name: item.name,
    });
  };
  const { list, delItem, changeDone, changeName, addTodo } = useTodos();

  return (
    <Provider
      value={{
        delItem,
        changeDone,
        showEdit,
        current,
        setCurrent,
        changeName,
      }}
    >
      <section className="todoapp">
        <TodoHeader addTodo={addTodo} ref={myRef} />
        <TodoMain list={list} type={type} />
        <TodoFooter list={list} type={type} setType={setType} />
      </section>
    </Provider>
  );
};

export default App;
