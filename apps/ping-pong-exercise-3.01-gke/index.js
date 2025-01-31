const express = require("express");
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

// Define the file path inside the shared volume
const counterFilePath = path.join(__dirname, "data", "counter.txt");

// PostgreSQL connection settings
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "postgres-0.postgres.default.svc.cluster.local", // StatefulSet hostname
  database: process.env.DB_NAME || "pingpongdb",
  password: process.env.DB_PASSWORD || "password",
  port: process.env.DB_PORT || 5432,
});

// Ensure the table exists
const initDB = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS counter (
        id SERIAL PRIMARY KEY,
        value INT NOT NULL DEFAULT 0
      );
    `);
    const result = await client.query("SELECT * FROM counter LIMIT 1;");
    if (result.rowCount === 0) {
      await client.query("INSERT INTO counter (value) VALUES (0);");
    }
  } finally {
    client.release();
  }
};

initDB();

// Initialize the counter
app.get("/pingpong", async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query("UPDATE counter SET value = value + 1 WHERE id = 1;");
    const result = await client.query(
      "SELECT value FROM counter WHERE id = 1;"
    );
    res.send(`pong ${result.rows[0].value}`);
  } finally {
    client.release();
  }
});

app.get("/pingpong-count", async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT value FROM counter WHERE id = 1;"
    );
    res.json({ counter: result.rows[0].value });
  } finally {
    client.release();
  }
});

app.listen(PORT, () => {
  console.log(`Ping-pong application listening on port ${PORT}`);
});
