function Product(name, price, discont = 0.15) {
  this.name = name;
  this.price = price;

  this.finalPrice = function () {
    return this.price * (1 - discont);
  };
}

console.log(typeof Product);
console.log(typeof Promise);
console.log(typeof Object);

const p1 = new Product("Pen", 1.6);
console.log(typeof p1);
const p2 = new Product("Fridge", 1000);
console.log(typeof p2);
console.log(p2.finalPrice());
