// Functions that operate other functions
// taking them as arguments or returning them
// are called higher order functions

const exec = (fn, ...params) => {
  return (text) => {
    return `${text} ${fn(...params)}!`;
  };
};

const sum = (a, b, c) => {
  return a + b + c;
};

const multi = (a, b, c) => {
  return a * b * c;
};

const r1 = exec(sum, 3, 4, 5)("The result of the sum is");
const r2 = exec(multi, 1, 10, 20)("The result of the multiplication is");

console.log(r1);
console.log(r2);
