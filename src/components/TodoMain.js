const TodoList = ({ list }) => {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list.map((item) => (
          <li className={item.done ? "completed" : ""} key={item.id}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{item.name}</label>
              <button className="destroy" />
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
