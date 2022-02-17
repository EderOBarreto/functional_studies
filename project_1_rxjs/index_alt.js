const path = require("path");
const { toArray, map, groupBy, mergeMap } = require("rxjs/operators");
const {
  elementEndsWith,
  filterEmpty,
  filterNumber,
  readDirectory,
  readFile,
  removeSymbols,
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
    groupBy((el) => el.toLowerCase()),
    mergeMap((groups) => groups.pipe(toArray())),
    map((words) => ({ element: words[0], qtde: words.length })),
    toArray(),
    map((array) => _.sortBy(array, (el) => -el.qtde))
  )
  .subscribe(console.log);
