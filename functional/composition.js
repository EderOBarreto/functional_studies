function composition(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, value);
  };
}

const scream = (text) => text.toUpperCase();
const emphasize = (text) => `${text}!!!!`;
const toSlow = (text) => text.split("").join(" ");

const exaggerated = composition(scream, emphasize, toSlow);
const result = exaggerated("para");
console.log(result);
