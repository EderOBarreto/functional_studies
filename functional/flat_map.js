const nestedletters = [
  ["h", "e", ["l"], "l", "o"],
  [" "],
  ["w", ["o", "r"], "l", "d"],
  ["!"],
];

const newLetters = letters.flat(Infinity);
console.log(newLetters);
const result = newLetters.map((l) => l.toUpperCase()).reduce((a, b) => a + b);
console.log(result);
