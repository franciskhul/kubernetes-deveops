const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "files", "timestamps.txt");

setInterval(() => {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(filePath, `${timestamp}\n`);
  console.log(`Written timestamp: ${timestamp}`);
}, 5000);
