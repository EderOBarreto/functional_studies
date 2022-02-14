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

const composition = require("../functional/composition_2");

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

composition(
  readDirectory,
  elementEndsWith(".srt"),
  readFiles,
  joinBy("\n"),
  splitBy("\n"),
  filterEmpty,
  filterIfIncludes("-->"),
  filterNumber,
  removeSymbols(symbols),
  joinBy(" "),
  splitBy(" "),
  filterEmpty,
  convertToLowerCase,
  countWords,
  sortBy("qtd"),
  console.log
)(directoryPath);
