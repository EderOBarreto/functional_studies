// wait 3000
// generate numbers at each 500 ms
// After 10000 unsubscribe

const { timer, Subscription } = require("rxjs");

const timer$ = timer(3000, 500);

const sub1 = timer$.subscribe((n) => {
  console.log(n);
});

const sub2 = timer$.subscribe((n) => {
  console.log(n);
});

const sub = new Subscription();
sub.add(sub1);
sub.add(sub2);

setTimeout(() => {
  sub.unsubscribe();
}, 10000);
