var UNIT_PRICE = 10;
var TAX_RATE = 0.07;
var SHIPPING = 4;

function getUnitPrice() {
  return UNIT_PRICE;
}

function getTaxes() {
  return UNIT_PRICE * TAX_RATE;
}

function getShipping() {
  return SHIPPING;
}

function getNumberOfItems() {
  var quantity = document.getElementById('quantity').value;
  return quantity;
}

function getTotalCost() {
  var numberOfItems = getNumberOfItems();
  var totalCost =
    getUnitPrice() * numberOfItems + getTaxes() * numberOfItems + getShipping();
  document.getElementById('cost').innerHTML = 'Total Cost: $' + totalCost;
}
