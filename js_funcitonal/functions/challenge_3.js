const path = require("path");
const fs = require("fs");

const getContent = (filename) => {
  return new Promise((resolve) => {
    const pathfile = path.join(__dirname, filename);
    fs.readFile(pathfile, (_, result) => {
      resolve(result.toString());
    });
  });
};

const content = getContent("../data.txt").then(console.log);
