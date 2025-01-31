const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize the counter
let counter = 0;

// Read the content from the ConfigMap file "information.txt"
const fileContent = fs.readFileSync("/etc/config/information.txt", "utf8");
// Get the MESSAGE environment variable from the ConfigMap
const message = process.env.MESSAGE || "No message set";

// Handle GET requests to /
app.get("/pingpong", (req, res) => {
  counter++;
  const timestamp = new Date().toISOString(); // Get the current timestamp in UTC
  res.send(`
    file content: ${fileContent}
    env variable: MESSAGE=${message}
    ${timestamp}
    Ping / Pongs: ${counter}
  `);
});

app.get("/pingpong-count", (req, res) => {
  res.json({
    counter,
  });
});

// Start the application
app.listen(PORT, () => {
  console.log(`Ping-pong application listening on port ${PORT}`);
});
