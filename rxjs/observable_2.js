const { Observable } = require("rxjs");

const obs = new Observable((subscriber) => {
  subscriber.next("RxJS");
  subscriber.next("is");
  subscriber.next("really");
  subscriber.next("powerful!");

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error("What a problem!");
  }
});

obs.subscribe({
  next: (value) => console.log(`Value: ${value}`),
  error: (err) => console.log(`Error: ${err}`),
  complete: () => console.log("END"),
});
