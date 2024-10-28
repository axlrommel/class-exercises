var cardsHolder = document.getElementById('cardsPlaceholder');

var item = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

function loadCards() {
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
