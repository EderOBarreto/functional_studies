const { interval, from } = require("rxjs");

const generateNums = interval(500);

const sub1 = generateNums.subscribe((n) => {
  console.log(2 ** n);
});

setTimeout(() => {
  sub1.unsubscribe();
}, 10000);

// from([1, 2, 3]).subscribe(console.log);
