import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const subtitleDir = path.join(__dirname, "../data/subtitles/");

import {
  filterNumbers,
  filterInvalidCharacters,
  wordToLowercase,
  removeInvalidCharacters,
  countWords,
} from "./functions.mjs";

const showContent = (data) => {
  const words = data.split(/[\s,]/);
  let unorderedWords = words
    .filter(filterNumbers)
    .filter(filterInvalidCharacters)
    .map(removeInvalidCharacters)
    .map(wordToLowercase)
    .reduce(countWords, {});

  const dictionary = Object.entries(unorderedWords)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .reduce((acc, el) => {
      acc[el[0]] = el[1];
      return acc;
    }, {});

  return dictionary;
};

fs.readdir(subtitleDir, (_, files) => {
  const subtitlePaths = files
    .filter((filename) => /\w+.srt$/.test(filename))
    .map((filename) => {
      return path.join(subtitleDir, filename);
    });

  const promises = subtitlePaths.map((pathfile) => {
    return new Promise((resolve) => {
      fs.readFile(pathfile, (_, result) => {
        resolve(result.toString());
      });
    });
  });

  return Promise.all(promises).then((data) => {
    const words = showContent(data.join());
    console.log(words);
  });
});
