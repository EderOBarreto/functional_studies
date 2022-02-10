class Product {
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }

  get finalPrice() {
    return this.price * (1 - this.discount);
  }

  set price(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    }
  }

  set name(newName) {
    this.name = newName;
  }
}
