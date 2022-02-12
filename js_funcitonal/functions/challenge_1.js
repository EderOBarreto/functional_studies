const sum = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

const r1 = sum(1)(2)(3);
console.log({ r1 });

const calc = (n1) => {
  return (n2) => {
    return (fn) => {
      return fn(n1, n2);
    };
  };
};

const r2 = calc(2)(3)((a, b) => a + b);
console.log({ r2 });
