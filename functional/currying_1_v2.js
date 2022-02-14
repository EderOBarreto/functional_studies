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

const forceDefaultSize = textIsBetween(4)(255);
const forceNameValidProduct = forceDefaultSize("Invalid Name");

const p1 = { name: "A", price: 14.99, desc: 0.25 };
forceNameValidProduct(p1.name);
