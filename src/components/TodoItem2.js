import React, { memo, useContext, useEffect, useRef } from "react";
import { context } from "../App";

export default memo(function TodoItem2({ item }) {
  const { delItem, changeDone, showEdit, current, setCurrent, changeName } =
    useContext(context);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [current]);
  const delItemFn = () => {
    delItem(item.id);
  };
  const changeDoneFn = () => {
    changeDone(item.id);
  };
  const doubleClickFn = () => {
    showEdit(item);
  };
  const onKeyUp = (e) => {
    if (e.keyCode === 27) {
      setCurrent({ id: "", name: "" });
    }
    if (e.keyCode === 13) {
      changeName(current);
      setCurrent({ id: "", name: "" });
    }
  };

  return (
    <li
      className={[
        item.done ? "completed" : "",
        item.id === current.id ? "editing" : "",
      ].join(" ")}
      key={item.id}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={changeDoneFn}
        />
        <label onDoubleClick={doubleClickFn}>{item.name}</label>
        <button className="destroy" onClick={delItemFn} />
      </div>
      <input
        className="edit"
        value={current.name}
        onKeyUp={onKeyUp}
        onChange={(e) =>
          setCurrent({
            ...current,
            name: e.target.value,
          })
        }
        ref={inputRef}
        onBlur={(e) =>
          setCurrent({
            id: "",
            name: "",
          })
        }
      />
    </li>
  );
});
