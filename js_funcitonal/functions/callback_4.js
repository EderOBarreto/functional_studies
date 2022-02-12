const cart2 = [
  { name: "Caneta", qtde: 10, price: 7.99 },
  { name: "Impressoara", qtde: 0, price: 649.5 },
  { name: "Caderno", qtde: 4, price: 29.1 },
  { name: "Lapis", qtde: 3, price: 5.82 },
  { name: "Tesoura", qtde: 1, price: 19.2 },
];

const qtdGreaterThanZero = (item) => item.qtde > 0;
const qtdGreaterThanOneThousand = (item) => item.qtde > 1000;

// const itens = cart2.filter(qtdGreaterThanZero);

// console.log(itens);

Object.defineProperty(Array.prototype, "customFilter", {
  value: function (fn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
        newArr = [...newArr, this[i]];
      }
    }
    return newArr;
  },
});

const result = cart2.customFilter(({ price }) => price > 10);

console.log("RESULT");
console.log(result);
