function Product(name, price, discont = 0.15) {
  this.name = name;
  this.price = price;
  this._discount = discont;

  this.finalPrice = function () {
    return this.price * (1 - discont);
  };
}

Product.prototype.log = function () {
  console.log(`Name: ${this.name}`);
};

Object.defineProperty(Product.prototype, "discount", {
  get: function () {
    return this._discount;
  },
});

Object.defineProperty(Product.prototype, "discountStr", {
  get: function () {
    return `${this._discount * 100}px`;
  },
});

console.log(typeof Product);
console.log(typeof Promise);
console.log(typeof Object);

const p1 = new Product("Pen", 1.6);
console.log(typeof p1);
const p2 = new Product("Fridge", 1000);
console.log(typeof p2);
console.log(p2.finalPrice());

p1.log();
