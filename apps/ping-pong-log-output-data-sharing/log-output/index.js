const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3001;

// Define the file path inside the shared volume
const counterFilePath = path.join(__dirname, "data", "counter.txt");

app.get("/logoutput", (req, res) => {
  // Get the current timestamp
  const timestamp = new Date().toISOString();
  // Read the counter from the file
  let counter = 0;
  if (fs.existsSync(counterFilePath)) {
    counter = parseInt(fs.readFileSync(counterFilePath, "utf8")) || 0;
  }
  // Generate a UUID for the request
  const uuid = uuidv4();
  // Return the timestamp, UUID, and counter in the specified format
  const response = `${timestamp}: ${uuid}.\nPing / Pongs: ${counter}`;
  res.send(response);
});

app.get("/status", (req, res) => {
  res.json({
    timestamp,
    randomString,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
