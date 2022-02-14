const path = require("path");
const fs = require("fs");

const filterByExtension = (ext) => (filename) =>
  RegExp(`.${ext}$`).test(filename);

const elementEndsWith = (pattern) => (arr) => {
  return arr.filter((el) => el.endsWith(pattern));
};

function readDirectory(dirPath) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs
        .readdirSync(dirPath)
        .map((filename) => path.join(dirPath, filename));
      resolve(files);
    } catch (e) {
      reject(e);
    }
  });
}

const filterEmpty = (arr) => {
  return arr.filter((el) => el.trim());
};

const filterIfIncludes = (pattern) => (arr) => {
  return arr.filter((el) => !el.includes(pattern));
};

const filterNumber = (arr) => {
  return arr.filter((el) => {
    const num = parseInt(el);
    return num !== num;
  });
};

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(filename);
      resolve(data.toString());
    } catch (e) {
      reject(e);
    }
  });
};

const readFiles = (filenames) => {
  return Promise.all(filenames.map(readFile));
};

const removeSymbols = (symbols) => (arr) => {
  return arr.map((el) => {
    return symbols.reduce((acc, symbol) => {
      return acc.split(symbol).join("");
    }, el);
  });
};

const countWords = (words) => {
  return Object.values(
    words.reduce((dic, word) => {
      const qtd = dic[word] ? dic[word].qtd + 1 : 1;
      dic[word] = { word, qtd };
      return dic;
    }, {})
  );
};

const sortBy =
  (attr) =>
  (arr, order = "desc") => {
    const options = {
      desc: (a, b) => b[attr] - a[attr],
      asc: (a, b) => a[attr] - b[attr],
    };
    return [...arr].sort(options[order]);
  };

module.exports = {
  elementEndsWith,
  filterByExtension,
  filterEmpty,
  filterIfIncludes,
  filterNumber,
  readDirectory,
  readFiles,
  removeSymbols,
  countWords,
  sortBy,
};
