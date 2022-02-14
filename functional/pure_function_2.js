// is that a pure or impure function?

// if the function isn't deterministic than the function is impure
const generateRamdomNumber = (min, max) => {
  const factor = max - min + 1;
  return Math.floor(Math.random() * factor) + min;
};

console.log(generateRamdomNumber(5, 7));
