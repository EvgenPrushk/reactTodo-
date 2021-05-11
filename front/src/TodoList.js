import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  props.todos.sort((todoA, todoB) => todoB.id - todoA.id);

  const todoItems = props.todos.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.id}
      toggleTodo={props.toggleTodo}
      editTodo={props.editTodo}
    />
  ));

  return <ul className="list-group">{ todoItems }</ul>;
}
