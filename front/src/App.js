import React, { useState, useEffect, createContext } from "react";
import AppHeader from "./AppHeader";
import TodoList from "./TodoList";
import useTodos from "./useTodos";
import Context from "./Context";

function App() {
  const [todos, dispatch] = useTodos();

  const [newTodo, setNewTodo] = useState("");

  const [showActions, setShowActions] = useState(false);

  useEffect(() => setShowActions(todos.some((todo) => todo.selected)), [todos]);

  const handlerNewTodo = (e) => {
    if (e.key === "Enter") {
      dispatch.create({
        // увеличиваем число id на 1
        // id: 1 + Math.max(0, ...todos.map((todo) => todo.id)),
        done: false,
        selected: false,
        content: newTodo,
      });

      setNewTodo("");
    }
  };

  return (
    // use { } because dispath is Object
    <Context.Provider value={{ dispatch }}>
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
                  onClick={() => dispatch({ type: "DONE" })}
                >
                  Выполниить
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => dispatch({ type: "REMOVE" })}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="overflow-auto">
            <TodoList todos={todos} />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
