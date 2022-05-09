var users = [{name: 'rommel', color: 'green'}, 
{name: 'donnahue', color: 'red'},
{name: 'charlie', color: 'blue'}];

var mainDiv = document.querySelector('#list');
var listEl = document.createElement("ul");
for(var i = 0; i< users.length; i++) {
    var li = document.createElement("li");
    li.textContent = users[i].name;
    li.setAttribute("style", `color:${users[i].color}`);
    listEl.appendChild(li);
}
mainDiv.appendChild(listEl);
