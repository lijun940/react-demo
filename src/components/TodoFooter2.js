import { useState } from "react";

const TodoFooter = ({ list, type, setType }) => {
  const leftCount = list.filter((item) => !item.done).length;
  const types = ["all", "active", "completed"];
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount}</strong> item left
      </span>
      <ul className="filters">
        {types.map((item) => (
          <li key={item}>
            <a
              href="#"
              className={type === item ? "selected" : ""}
              onClick={() => setType(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default TodoFooter;
