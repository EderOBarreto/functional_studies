// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

function textIsBetween(min, max, err, text) {
  const size = (text || "").trim().length;
  if (size < min || size > max) {
    throw err;
  }
}

const p1 = { name: "A", price: 14.99, desc: 0.25 };
textIsBetween(4, 255, "Invalid Name", p1.name);
