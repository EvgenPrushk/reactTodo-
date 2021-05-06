import React, { useState } from "react";
import AppHeader from "./AppHeader";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "Посмотреть вебинар по React",
      done: false,
      selected: false,
    },
    { id: 2, content: "Купить молоко", done: false, selected: true },
    { id: 3, content: "Поставить лайк видео", done: true, selected: false },
    { id: 4, content: "Купить колу", done: true, selected: false },
    { id: 5, content: "Заплатить комуналку", done: false, selected: false },
    {
      id: 6,
      content: "Сделать физические упражнения",
      done: false,
      selected: false,
    },
    { id: 7, content: "Проверить почту", done: false, selected: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

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
      }
    }
    setTodos([...todos]);
  };

  const removeSelected = () => {
    setTodos(todos.filter((todo) => !todo.selected));
  };

  const handlerNewTodo = (e) => {
    if (e.key === "Enter") {
      const todo = {
          // увеличиваем число id на 1 
        id: 1 + Math.max(0, ...todos.map(todo => todo.id)),
        done: false,
        selected: false,
        content: newTodo,
      };
      setTodos([todo, ...todos]);
      setNewTodo("");
    }
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
        <div className="overflow-auto">
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
