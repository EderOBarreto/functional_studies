const { Observable, Subject } = require("rxjs");

// const getObservable = () => {
//   return new Observable((subscriber) => {
//     setTimeout(() => {
//       subscriber.next(Math.random());
//       subscriber.complete();
//     }, 1000);
//   });
// };

// const obs = getObservable();
// obs.subscribe(console.log);
// obs.subscribe(console.log);

const getSubject = () => {
  const sub = new Subject();
  setTimeout(() => {
    sub.next(Math.random());
    sub.complete();
  }, 1000);
  return sub;
};

const sub = getSubject();
sub.subscribe(console.log);
sub.subscribe(console.log);
