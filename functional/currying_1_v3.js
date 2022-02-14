function textIsBetween(min) {
  return function (max) {
    return function (err) {
      return function (text) {
        // lazy evaluation
        const size = (text || "").trim().length;
        if (size < min || size > max) {
          throw err;
        }
      };
    };
  };
}
function applyValidation(fn) {
  return function (value) {
    // Lazy evaluation
    try {
      fn(value);
    } catch (e) {
      return { error: e };
    }
  };
}

const forceDefaultSize = textIsBetween(4)(255);
const forceNameValidProduct = forceDefaultSize("Invalid Name");
const validateProductName = applyValidation(forceNameValidProduct);

const p1 = { name: "A", price: 14.99, desc: 0.25 };
const p2 = { name: "AB", price: 14.99, desc: 0.25 };
const r1 = validateProductName(p1.name);
const r2 = validateProductName(p2.name);
console.log(r1);
console.log(r2);
