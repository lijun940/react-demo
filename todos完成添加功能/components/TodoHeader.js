import { useState } from "react";

const TodoAdd = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </header>
  );
};

export default TodoAdd;
