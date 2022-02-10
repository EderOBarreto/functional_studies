function goddMorning() {
  console.log("Good morning");
}

const goodAfternoon = function () {
  console.log(" Good afternoon");
};

function execSomething(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

function power(base) {
  return (exp) => Math.pow(base, exp);
}

const bits8 = power(2)(8);
console.log(bits8);
