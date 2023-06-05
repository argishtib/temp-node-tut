const path = require("path");

console.log(path);

const filePath = path.join("content", "subfolder", "text.txt");
console.log(filePath);

const base = path.resolve(__dirname);
console.log(base);
