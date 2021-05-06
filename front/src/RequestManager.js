export function getAll() {
  return fetch("/todoItems", {
    method: "GET",
  }).then((response) => response.json());
}

export function getById(id) {
  return fetch("/todoItems" + id, {
    // получение данных
    method: "GET",
  }).then((response) => response.json());
}

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
