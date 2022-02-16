// challenge
// Create a stream of numbers
// between min and max with an Observable

const { Observable, range, noop } = require("rxjs");

const numberInterval = (min, max) => range(min, max - min);

const obs = numberInterval(4, 10);

// obs.subscribe((n) => console.log(n));

const between = (min, max) => {
  // if (min > max) {
  //   [min, max] = [max, min];
  // }

  return new Observable((subscriber) => {
    Array(max - min + 1)
      .fill()
      .forEach((_, i) => {
        subscriber.next(min + i);
      });
    subscriber.complete();
  });
};

const obs2 = between(4, 10).subscribe({
  next: (num) => console.log(num),
  error: noop,
  complete: () => console.log("END"),
});
