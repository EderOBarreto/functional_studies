const cart4 = [
  { name: "Caneta", qtde: 10, price: 7.99, fragile: true },
  { name: "Impressoara", qtde: 1, price: 649.5, fragile: true },
  { name: "Caderno", qtde: 4, price: 27.1, fragile: false },
  { name: "Lapis", qtde: 3, price: 5.82, fragile: false },
  { name: "Tesoura", qtde: 1, price: 19.2, fragile: true },
];

const average = cart4
  .filter(({ fragile }) => fragile)
  .map(({ qtde, price }) => qtde * price)
  .reduce(
    ({ qtde, total }, el) => {
      const newQtde = qtde + 1;
      const newTot = total + el;
      return {
        qtde: newQtde,
        total: newTot,
        avg: newTot / newQtde,
      };
    },
    { qtde: 0, total: 0, avg: 0 }
  ).avg;

console.log({ average });

Object.defineProperty(Array.prototype, "customReducer", {
  value: function (fn, initial) {
    let result = initial ?? this?.[0];
    for (let i = initial ? 0 : 1; i < this.length; i++) {
      result = fn(result, this[i], i);
    }
    return result;
  },
});

const average2 = cart4
  .filter(({ fragile }) => fragile)
  .map(({ qtde, price }) => qtde * price)
  .customReducer(
    ({ qtde, total }, el) => {
      const newQtde = qtde + 1;
      const newTot = total + el;
      return {
        qtde: newQtde,
        total: newTot,
        avg: newTot / newQtde,
      };
    },
    { qtde: 0, total: 0, avg: 0 }
  ).avg;

console.log({ average2 });

const sum = [1, 2, 3, 4, 5, 6].customReducer((a, b) => a + b, 0);

console.log({ sum });
