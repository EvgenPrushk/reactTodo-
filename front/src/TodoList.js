import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  // todos is array and i have  all method array
  const todoItems = props.todos.map((todo) => (
    <TodoItem todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />
  ));

  return <ul className="list-group">{todoItems}</ul>;
}