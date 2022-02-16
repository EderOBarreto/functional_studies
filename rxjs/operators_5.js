const { of, Observable } = require("rxjs");

const endedWith = (pattern) => {
  return (source) => {
    return new Observable((subscriber) => {
      source.subscribe({
        next: (value) => {
          if (Array.isArray(value)) {
            subscriber.next(value.filter((el) => el.endsWith(pattern)));
          } else if (value.endsWith(pattern)) {
            subscriber.next(value);
          }
        },
        error: (e) => {
          subscriber.error(e);
        },
        complete: () => {
          subscriber.complete();
        },
      });
    });
  };
};

of(["John Snow", "Charles Darwin", "Richard Dawkins"])
  .pipe(endedWith("Darwin"))
  .subscribe(console.log);
