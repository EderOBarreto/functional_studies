// 1. Creation Operators
const { of, from } = require("rxjs");

// 2. Pipeable Operators
const { last, first, map } = require("rxjs/operators");

from([1, 2, "Ana", false, "last"])
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `The found letter was ${v}`)
  )
  .subscribe((value) => console.log(value));
