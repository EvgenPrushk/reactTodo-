import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload;

    case "TOGGLE_CELECT":
      const todo = state.map((x) => x.id === action.payload);
      todo.selected = !todo.selected;
      // return new state
      return [...state];
  }
}

export default function useTodos() {
  const [todos, dispatch] = useReducer(reducer, []);

//   getAll().then((todos) =>
//     dispatch({
//       type: "INIT",
//       payload: todos,
//     })
//   );

  return [todos, dispatch];
}
