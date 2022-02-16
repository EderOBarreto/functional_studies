const { Observable } = require("rxjs");

function elementsWithDelay(time, ...elements) {
  return new Observable((subs) => {
    elements?.forEach((el, i) => {
      setTimeout(() => {
        subs.next(el);
        if (elements.length === i + 1) {
          subs.complete();
        }
      }, time * (i + 1));
    });
  });
}

elementsWithDelay(1000, 1, 2, 3, 4, 5, 6, 7).subscribe(console.log);
