const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize the counter
let counter = 0;

// Handle GET requests to /
app.get("/pingpong", (req, res) => {
  counter++;
  res.send(`pong ${counter}`);
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
