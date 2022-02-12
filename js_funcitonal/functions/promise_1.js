let a = 1;
console.log(a);

let p = new Promise(function (resolve) {
  resolve([1, 2, 3, 4]);
});

p.then((result) => result[0])
  .then((first) => first + 2)
  .then((r) => console.log(r));
