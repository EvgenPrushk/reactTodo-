export function getAll() {
  return fetch("/todoItems", {
    method: "GET",
  }).then((response) => response.json());
}

export function getById(id) {
  return fetch("/todoItems/" + id, {
    // получение данных
    method: "GET",
  }).then((response) => response.json());
}
// add Todo element
export function creteTodo(todo) {
  return fetch("/todoItems", {
    //передача данных
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}
// update todo  element
export function updateTodo(todo) {
  return fetch("/todoItems/" + todo.id, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}
// remove todo  element
export function removeTodo(todo) {
  return fetch("/todoItems/" + todo.id, {
    method: "DELETE",
  }).then((response) => response.json());
}
