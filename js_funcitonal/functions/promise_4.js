function getNumber(min, max, time) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const factor = max - min + 1;
      const random = parseInt(Math.random() * factor + min);
      resolve(random);
    }, time);
  });
}

function getManyNumbers() {
  return Promise.all([
    getNumber(1, 60, 4000),
    getNumber(1, 60, 1000),
    getNumber(1, 60, 500),
    getNumber(1, 60, 3000),
    getNumber(1, 60, 100),
    getNumber(1, 60, 1500),
  ]);
}

console.time("promise");
getManyNumbers()
  .then(console.log)
  .then(() => {
    console.timeEnd("promise");
  });
