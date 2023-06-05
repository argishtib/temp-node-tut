const { log } = require("console");
const { readFile, writeFile } = require("fs");

log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    log(err);
    return;
  }
  const first = result;

  writeFile(
    "./content/result-async.txt",
    `first text results: ${first} \n`,
    { flag: "a" },
    (err, result) => {
      if (err) {
        log(err);
        return;
      }
    }
  );
});
