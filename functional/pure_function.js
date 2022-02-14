// a pure function is a function that returns a value
// based only on the values that it receives;
// without any side effects

const PI = 3.14; // PI can mutate, but has a stable value

// not pure - PI is not passed to the function
const circleArea = (radius) => {
  return radius ** 2 * Math.PI;
};

const pureCircleArea = (radius, PI) => {
  return radius ** 2 * PI;
};

console.log(pureCircleArea(10, Math.PI));
