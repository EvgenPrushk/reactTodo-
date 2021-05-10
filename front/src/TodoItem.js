import React, { useState } from "react";

export default function TodoItem(props) {
  const [editMode, setEditMode] = useState(false);

  if (editMode) {
    return (
      <li className="list-group-item d-flex justify-content-between" focus>
        <input
          type="text"
          className="form-control"
          value={props.todo.content}
          onChange={(e) =>
            props.editTodo({
              ...props.todo,
              content: e.target.value,
            })
          }
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
          {props.todo.content}
        </span>
      </label>
      <small className="text-muted">12.04.2020</small>
    </li>
  );
}
