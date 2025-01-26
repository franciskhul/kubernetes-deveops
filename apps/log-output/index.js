const express = require("express");
const crypto = require("crypto");

// Generate a random string on startup
const randomString = crypto.randomUUID();
let timestamp = new Date().toISOString();

function logRandomString() {
  timestamp = new Date().toISOString();
}

// Change the timestamp after every 5 seconds
setInterval(logRandomString, 5000);

const app = express();

app.get("/status", (req, res) => {
  res.json({
    timestamp,
    randomString,
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
