const { from, Observable } = require("rxjs");

function first() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.next(v);
          subscriber.complete();
        },
      });
    });
  };
}

const last = () => {
  return (source) => {
    return new Observable((subscriber) => {
      let last;
      source.subscribe({
        next: (v) => {
          last = v;
        },
        complete: () => {
          subscriber.next(last);
          subscriber.complete();
        },
      });
    });
  };
};

from([1, 2, 3, 4, 5]).pipe(last()).subscribe(console.log);
