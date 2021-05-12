import { useReducer, useEffect } from "react";
import { getAll, creteTodo, updateTodo, removeTodo } from "./RequestManager";

function reducer(state, action) { 
  switch (action.type) {
    case "INIT":
      return action.payload;

    case "SET_SELECT": {
      const newState = [];
      for (const todo of state) {
        if (todo.id === action.payload.id) {
          todo.selected = action.payload.selected;
        }
        // only copy State (todo)
        newState.push({ ...todo });
      }
      // return new State (todo)
      return newState;
    }

    case "UPDATE": {
      const newState = [];
      for (const todo of state) {
        if (todo.id === action.payload.id) {
          // save local Storage
          Object.assign(todo, action.payload);
          updateTodo(todo);
        }
        // only copy State (todo)
        newState.push({ ...todo });
      }
      
      return newState;
    }

    case "ADD":
      return [action.payload, ...state];

    case "DONE": {
      const newState = [];
      for (const todo of state) {
        if (todo.selected) {
          todo.selected = false;
          todo.done = true;
          updateTodo(todo);
        }
        // only copy State (todo)
        newState.push({ ...todo });
      }

      return newState;
    }

    case "REMOVE": {
      const newState = [];
      for (const todo of state) {
        if (todo.selected) {
          removeTodo(todo);
        } else {
          // only copy State (todo)
          newState.push({ ...todo });
        }
      }

      return newState;
    }

    default:
      return [...state];
  }
}

export default function useTodos() {
  const [todos, dispatch] = useReducer(reducer, []);

  dispatch.create = function create(todo) {
    creteTodo(todo).then((todo) =>
      dispatch({
        type: "ADD",
        payload: todo,
      })
    );
  };

  useEffect(() => {
    getAll().then((todos) =>
      dispatch({
        type: "INIT",
        payload: todos,
      })
    );
  }, []);

  return [todos, dispatch];
}
