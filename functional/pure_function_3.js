// mock

let qtdeExecutions = 0;

// pure function
const sum = (a, b) => {
  qtdeExecutions++; // observable side effect
  return a + b;
};

console.log(sum(10, 32));
