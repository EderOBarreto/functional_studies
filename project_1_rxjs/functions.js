const path = require("path");
const fs = require("fs");
const { Observable } = require("rxjs");

const createPipebleOperator = (operator) => {
  return (source) => {
    return new Observable((subscriber) => {
      const sub = operator(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || ((e) => subscriber.error(e)),
        complete: sub.complete || (() => subscriber.complete()),
      });
    });
  };
};

const elementEndsWith = (pattern) => {
  return createPipebleOperator((subscriber) => ({
    next: (text) => {
      if (text.endsWith(pattern)) {
        subscriber.next(text);
      }
    },
  }));
};

const splitBy = (pattern) => {
  return createPipebleOperator((subscriber) => ({
    next: (text) => {
      text.split(pattern).forEach((el) => {
        subscriber.next(el);
      });
    },
  }));
};

function readDirectory(dirPath) {
  return new Observable((subscriber) => {
    try {
      fs.readdirSync(dirPath).forEach((filename) => {
        const file = path.join(dirPath, filename);
        subscriber.next(file);
      });

      subscriber.complete();
    } catch (e) {
      subscriber.error(e);
    }
  });
}

const filterEmpty = () => {
  return createPipebleOperator((subscriber) => ({
    next: (text) => {
      if (text.trim()) {
        subscriber.next(text);
      }
    },
  }));
};

const filterNumber = (arr) => {
  return createPipebleOperator((subscriber) => ({
    next: (text) => {
      const num = parseInt(text);
      if (num !== num) {
        subscriber.next(text);
      }
    },
  }));
};

const readFile = (filename) => {
  return createPipebleOperator((subscriber) => ({
    next: (filename) => {
      try {
        const data = fs.readFileSync(filename);
        subscriber.next(data.toString());
      } catch (e) {
        subscriber.error(e);
      }
    },
  }));
};

const removeSymbols = (symbols) => {
  return createPipebleOperator((subscriber) => ({
    next: (text) => {
      const formattedText = symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join("");
      }, text);
      subscriber.next(formattedText);
    },
  }));
};

const countWords = () => {
  return createPipebleOperator((subscriber) => ({
    next: (words) => {
      const grouped = Object.values(
        words.reduce((dic, word) => {
          word = word.toLowerCase();
          const qtd = dic[word] ? dic[word].qtd + 1 : 1;
          dic[word] = { word, qtd };
          return dic;
        }, {})
      );
      subscriber.next(grouped);
    },
  }));
};

module.exports = {
  elementEndsWith,
  filterEmpty,
  filterNumber,
  readDirectory,
  readFile,
  removeSymbols,
  countWords,
  splitBy,
};
