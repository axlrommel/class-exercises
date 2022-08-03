const fibonacciNotRecursive = (position) => {
  if (position < 2) {
    return position;
  }
  let two_less_than_pos = 0;
  let one_less_than_pos = 1;
  for (let i = 0; i < position - 2; i++) {
    const a = two_less_than_pos + one_less_than_pos;
    const b = one_less_than_pos;
    one_less_than_pos = a;
    two_less_than_pos = b;
  }
  return two_less_than_pos + one_less_than_pos;
};

const fibonacciRecursive = (position) => {
  if (position < 2) {
    return position;
  }
  return fibonacciRecursive(position - 1) + fibonacciRecursive(position - 2);
};

console.time("fibonacciRecursive");
fibonacciRecursive(35);
console.timeEnd("fibonacciRecursive");

console.time("fibonacciNotRecursive");
fibonacciNotRecursive(35);
console.timeEnd("fibonacciNotRecursive");
