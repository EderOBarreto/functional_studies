// are objects that implement a map function
// that also is a value "wrapper"

// Array is an example of FUNCTOR
const nums = [1, 2, 3, 4, 5, 6];

const newNums = nums.map((el) => el + 10).map((el) => el * 2);
console.log(newNums);

function SecureType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined;
    },
    map(fn) {
      if (this.invalid()) {
        return SecureType(null);
      }
      const newValue = fn(this.value);
      return SecureType(newValue);
    },
    flatMap(fn) {
      return this.map(fn).value;
    },
  };
}

const result = SecureType("This is a text")
  .map((t) => t.toUpperCase())
  .map((t) => `${t}!!!!`)
  .flatMap((t) => t.split("").join(" "));

console.log(result);
