// arrow function
const happyChristmas = () => console.log("Happy Christmas!");

const greetings = (name) => `Hello ${name}, what's up?`;
console.log(greetings("Eder"));

const sum2 = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

console.log(sum2([1, 2, 3, 4, 5, 6]));
