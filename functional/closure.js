// closure is when a function "remember"
// its lexical scope, even when a function
// is executed out of its lexical scope

const sum = require("./closure_scope");
const x = 1000;
console.log(sum());
