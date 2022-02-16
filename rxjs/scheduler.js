const { from, asyncScheduler } = require("rxjs");
const { observeOn } = require("rxjs/operators");

console.log("Before...");

from([1, 2, 3, 4, 5, 6, 7, 8, 9])
  .pipe(observeOn(asyncScheduler))
  .subscribe(console.log);

console.log("After...");
