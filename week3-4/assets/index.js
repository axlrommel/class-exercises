var submitButton = document.getElementById('submitButton');
var unorderedList = document.getElementById('list');

function addTodo(event) {
  event.preventDefault();
  var inputTodo = document.getElementById('todoText').value;
  var newListElement = document.createElement('li');
  newListElement.textContent = inputTodo;
  unorderedList.appendChild(newListElement);
  document.getElementById('todoText').value = '';
}

submitButton.addEventListener('click', addTodo);
