const eager = (a, b) => {
  // heavy processment
  const end = Date.now() + 2500;
  while (Date.now() < end) {}

  const value = Math.pow(a, 3);
  return value + b;
};

const lazy = (a) => {
  // heavy processment
  const end = Date.now() + 2500;
  while (Date.now() < end) {}
  const value = Math.pow(a, 3);
  return function (b) {
    return value + b;
  };
};

// console.time("#1");
// console.log(eager(3, 100));
// console.log(eager(3, 200));
// console.log(eager(3, 300));
// console.timeEnd("#1");

const lazy3 = lazy(3);

console.time("#2");
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd("#2");
