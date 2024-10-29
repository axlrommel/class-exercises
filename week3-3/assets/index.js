var cardsHolder = document.getElementById('cardsPlaceholder');
var itemList = [];

function loadCard(item) {
  var section = document.createElement('div');
  section.setAttribute('class', 'card');
  var title = document.createElement('h4');
  title.textContent = item.title;
  var image = document.createElement('img');
  image.setAttribute('src', item.image);
  var price = document.createElement('p');
  price.textContent = item.price;
  section.appendChild(title);
  section.appendChild(image);
  section.appendChild(price);
  cardsHolder.appendChild(section);
}

function loadCards() {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      itemList = data;
      for (let i = 0; i < itemList.length; i++) {
        loadCard(itemList[i]);
      }
    });
}

function sortAscending() {
  itemList.sort((a, b) => a.price - b.price);
  cardsHolder.replaceChildren();
  for (let i = 0; i < itemList.length; i++) {
    loadCard(itemList[i]);
  }
}







