const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Define the file path inside the shared volume
const counterFilePath = path.join(__dirname, "data", "counter.txt");

// Initialize the counter
let counter = 0;
if (fs.existsSync(counterFilePath)) {
  counter = parseInt(fs.readFileSync(counterFilePath, "utf8")) || 0;
}

// Handle GET requests to /
app.get("/pingpong", (req, res) => {
  counter++;
  fs.writeFileSync(counterFilePath, counter.toString());
  res.send(`pong ${counter}`);
});

// Start the application
app.listen(PORT, () => {
  console.log(`Ping-pong application listening on port ${PORT}`);
});
