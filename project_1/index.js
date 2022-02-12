const path = require("path");
const {
  elementEndsWith,
  filterEmpty,
  filterIfIncludes,
  filterNumber,
  readDirectory,
  readFiles,
  removeSymbols,
  countWords,
  sortBy,
} = require("./functions");

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

const joinBy = (pattern) => (contents) => contents.join(pattern);
const splitBy = (pattern) => (content) => content.split(pattern);

const convertToLowerCase = (words) => words.map((w) => w.toLowerCase());

const files = readDirectory(directoryPath)
  .then(elementEndsWith(".srt"))
  .then(readFiles)
  .then(joinBy("\n"))
  .then(splitBy("\n"))
  .then(filterEmpty)
  .then(filterIfIncludes("-->"))
  .then(filterNumber)
  .then(removeSymbols(symbols))
  .then(joinBy(" "))
  .then(splitBy(" "))
  .then(filterEmpty)
  .then(convertToLowerCase)
  .then(countWords)
  .then(sortBy("qtd"))
  .then(console.log);
