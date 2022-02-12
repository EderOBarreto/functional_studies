function exec(fn, a, b) {
  return fn(a, b);
}

const sumInTerminal = (x, y) => console.log(x + y);
const subtractionInTerminal = (w, z) => console.log(w - z);

exec(sumInTerminal, 12, 12);
exec(subtractionInTerminal, 12, 12);

const fn = () => console.log("Exec...");
setInterval(fn, 1000);
