const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addToDo();
});

function addToDo() {
  console.log(input);
  let todoText = input.value;
  let listItem = document.createElement("li");
  listItem.innerHTML = todoText;
  listItem.addEventListener("click", (e) => {
    listItem.classList.toggle("completed");
  });

  listItem.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    listItem.remove();
  });
  todosUl.appendChild(listItem);
  input.value = "";
}
