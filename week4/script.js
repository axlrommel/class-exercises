function getUsers() {
  var users = [
    { name: "Rommel", color: "blue" },
    { name: "Charlie", color: "green" },
    { name: "Donnahue", color: "red" },
    { name: "Mary", color: "brown" },
  ];

  var mainDiv = document.querySelector("#list");
  var listEl = document.createElement("ul");
  for (var i = 0; i < users.length; i++) {
    var li = document.createElement("li");
    li.textContent = users[i].name;
    li.setAttribute("style", `color: ${users[i].color}`);
    listEl.appendChild(li);
  }
  mainDiv.appendChild(listEl);
}

var getUsersButton = document.querySelector("#get-users");
getUsersButton.addEventListener("click", getUsers);
