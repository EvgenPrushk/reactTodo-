import React, { useState, useContext } from "react";
import Context from "./Context";

export default function TodoItem(props) {
  const [editMode, setEditMode] = useState(false);
  //create new local storage
  const [input, setInput] = useState(props.todo.content)
  // use hyk useContext and  the element we went to reach
  const { dispatch } = useContext(Context);

  if (editMode) {
    return (
      <li className="list-group-item d-flex justify-content-between">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyUp={e =>{
            if (e.key === "Enter") {
              setEditMode(false);

              dispatch({
                type: "UPDATE",
                payload: {
                  ...props.todo,
                  // replace content = input
                  content: input,
                }
              })
            }
          }}
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
          onChange={(e) =>
            dispatch({
              type: "SET_SELECT",
              payload: {
                id: props.todo.id,
                selected: !props.todo.selected,
              },
            })
          }
        />
        <span className={props.todo.done ? "item-done" : ""}>
          {props.todo.content}
        </span>
      </label>
      <small className="text-muted">12.05.2021</small>
    </li>
  );
}
