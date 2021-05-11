import React, { useState } from "react";
import { updateTodo } from "./RequestManager";

export default function TodoItem(props) {
  const [editMode, setEditMode] = useState(false);

  const saveTodo = (e) => {
    if (e.key === "Enter") {
      setEditMode(false);
      //save todo in server
      updateTodo(props.todo);
    }
  };

  if (editMode) {
    return (
      <li className="list-group-item d-flex justify-content-between">
        <input
          type="text"
          className="form-control"
          value={props.todo.content}
          onChange={(e) => props.editTodo({
            ...props.todo,
            content: e.target.value,
          })}

          onKeyUp={saveTodo}
        />
      </li>
    );
  }
  return (
    <li
      className="list-group-item d-flex justify-content-between"
      onDoubleClick={() => setEditMode(true)}
    >
      <label>
        <input
          type="checkbox"
          className="mr-3"
          checked={props.todo.selected}
          onChange={(e) => props.toggleTodo(props.todo.id)}
        />
        <span className={props.todo.done ? "item-done" : ""}>
          {props.todo.content}{" "}
        </span>
      </label>
      <small className="text-muted">12.04.2020</small>
    </li>
  );
}
