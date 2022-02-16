const { from, Observable } = require("rxjs");

// const createPipebleOperator =
//   ({ next, error, complete }) =>
//   () => {
//     return (source) => {
//       return new Observable((subscriber) => {
//         source.subscribe({
//           next: (v) => {
//             next(v, subscriber);
//           },
//           error,
//           complete,
//         });
//       });
//     };
//   };

// const next = (v, subscriber) => {
//   subscriber.next(v);
//   subscriber.complete();
// };

// const newFirst = createPipebleOperator({ next });

const createPipebleOperator = (operator) => {
  return (source) => {
    return new Observable((subscriber) => {
      const sub = operator(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || ((e) => subscriber.error(e)),
        complete: sub.complete || (() => subscriber.complete()),
      });
    });
  };
};

const firstElement = () => {
  // return createPipebleOperator((subscriber, value) => {
  //   subscriber.next(value);
  //   subscriber.complete();
  // });

  return createPipebleOperator((subscriber) => ({
    next: (v) => {
      subscriber.next(v);
      subscriber.complete();
    },
  }));
};

const lastElement = () => {
  return createPipebleOperator((subscriber) => {
    let last;
    return {
      next: (v) => {
        last = v;
      },
      complete: () => {
        subscriber.next(last);
        subscriber.complete();
      },
    };
  });
};

// function first() {
//   return function (source) {
//     return new Observable((subscriber) => {
//       source.subscribe({
//         next(v) {
//           subscriber.next(v);
//           subscriber.complete();
//         },
//       });
//     });
//   };
// }

// const last = () => {
//   return (source) => {
//     return new Observable((subscriber) => {
//       let last;
//       source.subscribe({
//         next: (v) => {
//           last = v;
//         },
//         complete: () => {
//           subscriber.next(last);
//           subscriber.complete();
//         },
//       });
//     });
//   };
// };

from([1, 2, 3, 4, 5]).pipe(lastElement()).subscribe(console.log);
