import { useRef, useState } from "react";

const TodoAdd = ({ addTodo }) => {
  const inputRef = useRef("");
  const onChange = (e) => {
    inputRef.current.value = e.target.value;
  };
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        ref={inputRef}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </header>
  );
};

export default TodoAdd;
