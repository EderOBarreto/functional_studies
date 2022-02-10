const nums = [1, 2, 3, 4];
nums.map((n) => n * 2);

const cart = [
  { name: "Caneta", qtde: 10, price: 7.99 },
  { name: "Impressoara", qtde: 0, price: 649.5 },
  { name: "Caderno", qtde: 4, price: 29.1 },
  { name: "Lapis", qtde: 3, price: 5.82 },
  { name: "Tesoura", qtde: 1, price: 19.2 },
];

const getName = ({ name }) => name;
const getTotal = ({ price, qtde }) => price * qtde;

console.log(cart.map(getName));
const tot = console.log(cart.map(getTotal));

// my implementation
Object.defineProperty(Array.prototype, "customMap", {
  value: function (fn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr = [...newArr, fn(this[i], i, this)];
    }
    return newArr;
  },
});

const r = cart.customMap(getTotal);
console.log(r);
