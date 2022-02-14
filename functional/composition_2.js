function composition(...fns) {
  return function (value) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      }
      return fn(acc);
    }, value);
  };
}

const scream = (text) => text.toUpperCase();
const emphasize = (text) => `${text}!!!!`;
const toSlow = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text.split("").join(" "));
    }, 3000);
  });
};

const exaggerated = composition(scream, emphasize, toSlow);
exaggerated("para").then(console.log);

module.exports = composition;
