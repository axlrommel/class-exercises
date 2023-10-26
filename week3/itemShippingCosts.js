// global variables
var HANDLING_COSTS = 4;
var SHIPPING_RATE = 0.1;
var TAX_RATE = 0.1;

//functions
function getHandling(itemPrice) {
  return HANDLING_COSTS;
}

function getShipping(itemPrice) {
  return itemPrice * SHIPPING_RATE;
}

function getTax(itemPrice) {
  return itemPrice * TAX_RATE;
}

function getTotalCost(item) {
  return (
    item.price +
    getHandling(item.price) +
    getShipping(item.price) +
    getTax(item.price)
  );
}

//unit tests: tests one function
console.assert(getHandling(10) === 4);
console.assert(getHandling(20) === 4);

console.assert(getShipping(10) === 1);
console.assert(getShipping(20) === 2);
console.assert(getShipping(100) === 10);

console.assert(getTax(10) === 1);
console.assert(getTax(20) === 2);

//integration tests: tests more thn one function
console.assert(getTotalCost({ price: 10, isTaxExempt: false }) === 16);
console.assert(getTotalCost({ price: 20, isTaxExempt: false }) === 28);
console.assert(getTotalCost({ price: 30, isTaxExempt: false }) === 40);
