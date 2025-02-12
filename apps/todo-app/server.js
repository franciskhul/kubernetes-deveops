const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
