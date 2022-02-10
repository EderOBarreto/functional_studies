const cart3 = [
  { name: "Caneta", qtde: 10, price: 7.99 },
  { name: "Impressoara", qtde: 0, price: 649.5 },
  { name: "Caderno", qtde: 4, price: 27.1 },
  { name: "Lapis", qtde: 3, price: 5.82 },
  { name: "Tesoura", qtde: 1, price: 19.2 },
];

const prices = cart3.map(({ price, qtde }) => price * qtde);
console.log(prices);
const total = prices.reduce((p, c) => p + c);
console.log(total);
