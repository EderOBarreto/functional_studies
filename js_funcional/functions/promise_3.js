function getNumber(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor + min);
    resolve(random);
  });
}

getNumber(1, 60)
  .then((num) => num * 10)
  .then((num) => `The number was ${num}`)
  .then(console.log);
