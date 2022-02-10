const fs = require("fs");
const path = require("path");

const pathfile = path.join(__dirname, "../data.txt");

console.log(pathfile);

const showContent = (err, content) => {
  console.log(content.toString());
};

console.log("start");
fs.readFile(pathfile, showContent);
console.log("end");
