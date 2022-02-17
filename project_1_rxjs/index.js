const path = require("path");
const { toArray, map } = require("rxjs/operators");
const {
  elementEndsWith,
  filterEmpty,
  filterNumber,
  readDirectory,
  readFile,
  removeSymbols,
  countWords,
  splitBy,
} = require("./functions");
const _ = require("lodash");

const symbols = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

const directoryPath = path.join(__dirname, "../data/subtitles");

readDirectory(directoryPath)
  .pipe(
    elementEndsWith(".srt"),
    readFile(),
    splitBy("\n"),
    filterEmpty(),
    filterNumber(),
    removeSymbols(symbols),
    splitBy(" "),
    filterEmpty(),
    filterNumber(),
    toArray(),
    countWords(),
    map((array) => _.sortBy(array, (el) => -el.qtd))
  )
  .subscribe(console.log);
