import TodoItem2 from "./TodoItem2"

const TodoMain = ({list}) => {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
       {
        list?.map(item => (
          <TodoItem2 key={item.id} item={item}></TodoItem2>
        ))
       }
      </ul>
    </section>
  )
}

export default TodoMain
