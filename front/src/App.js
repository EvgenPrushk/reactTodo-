import React, { useState, useEffect } from "react";
import AppHeader from "./AppHeader";
import TodoList from "./TodoList";
import { getAll, creteTodo, updateTodo, removeTodo } from "./RequestManager";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => getAll().then((todos) => setTodos(todos)), []);
  //

  const [newTodo, setNewTodo] = useState("");

  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    setShowActions(todos.some((todo) => todo.selected));
  }, [todos]);

  const toggleTodo = (todoId) => {
    const todo = todos.find((todo) => todo.id === todoId);
    todo.selected = !todo.selected;
    // new station array todos [...todos]
    setTodos([...todos]);
  };

  const setDone = () => {
    for (const todo of todos) {
      if (todo.selected) {
        todo.done = true;
        todo.selected = false;
        updateTodo(todo);
      }
    }

    setTodos([...todos]);
  };

  const removeSelected = () => {
    setTodos(
      todos.filter((todo) => {
        if (todo.selected) {
          removeTodo(todo);
        }
        return !todo.selected;
      })
    );
  };

  const handlerNewTodo = (e) => {
    if (e.key === "Enter") {
      const todo = {
        // увеличиваем число id на 1
        // id: 1 + Math.max(0, ...todos.map((todo) => todo.id)),
        done: false,
        selected: false,
        content: newTodo,
      };

      creteTodo(todo).then((todo) => setTodos([todo, ...todos]));
      setNewTodo("");
    }
  };

  const editTodo = editedTodo => {
    for (const todo of todos) {
      if ((todo.id = editedTodo.id)) {
        todo.content = editedTodo.content;
      }
    }

    setTodos(...todos);
  };

  return (
    <div className="py-1 application container d-flex flex-column align-items-stretch">
      <div className="card h-100">
        <AppHeader />
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyUp={handlerNewTodo}
        />
        {showActions ? (
          <div className="ml-auto">
            <div className="brn-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setDone()}
              >
                Выполниить
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeSelected()}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="overflow-auto">
          <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
