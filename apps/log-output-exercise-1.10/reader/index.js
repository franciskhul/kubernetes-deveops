const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Path to the shared file that the writer is updating
const filePath = path.join(__dirname, "files", "timestamps.txt");

// Function to generate a hash of the file's contents
const generateHash = (content) => {
  return crypto.createHash("sha256").update(content).digest("hex");
};

// Read the file and generate a hash every 5 seconds
setInterval(() => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    const hash = generateHash(data);
    console.log(`Generated hash: ${hash}`);
  }
}, 5000);
