function workOrNot(value, errorChance) {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorChance) {
      reject("Something went wrong!");
    } else {
      resolve(value);
    }
  });
}

workOrNot("Testing", 0.8).then(console.log).catch(console.log);
