const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;
const PING_PONG_ENDPOINT = process.env.PING_PONG_ENDPOINT;

app.get("/", async (req, res) => {
  // Get the current timestamp
  const timestamp = new Date().toISOString();
  // get the counter from the ping-pong application
  const counterResponse = await axios.get(
    `${PING_PONG_ENDPOINT}/pingpong-count`
  );
  const { counter } = counterResponse.data;
  // Generate a UUID for the request
  const uuid = uuidv4();
  // Return the timestamp, UUID, and counter in the specified format
  const response = `${timestamp}: ${uuid}.\nPing / Pongs: ${counter}`;
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
