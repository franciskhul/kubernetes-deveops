const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 4568;

app.use(cors());
app.use(express.json());
// postgres://postgres:password@postgres-0.postgres.default.svc.cluster.local:5432/todoappdb
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "postgres-0.postgres.default.svc.cluster.local",
  database: process.env.DB_NAME || "todoappdb",
  password: process.env.DB_PASSWORD || "password",
  port: process.env.DB_PORT || 5432,
});

// Initialize table
const initDB = () => {
  pool
    .query(
      `
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      task TEXT NOT NULL
    );
  `
    )
    .then(() => console.log("Database initialized"))
    .catch((err) => {
      console.error("Error initializing database:", err);
      process.exit(1); // Exit if DB connection fails
    });
};
initDB();

// Get all todos
app.get("/todo-backend/todos", (req, res) => {
  pool
    .query("SELECT * FROM todos ORDER BY id DESC")
    .then((result) => res.json({ todos: result.rows }))
    .catch((err) => {
      console.error("Database error:", err);
      res.status(500).json({ error: "Database error" });
    });
});

// Add a new todo
app.post("/todo-backend/todos", (req, res) => {
  const { todo } = req.body;

  if (!todo || todo.trim() === "") {
    return res.status(400).json({ error: "Invalid todo" });
  }

  pool
    .query("INSERT INTO todos (task) VALUES ($1) RETURNING *", [todo.trim()])
    .then((result) =>
      res.status(201).json({ message: "Todo added", todo: result.rows[0] })
    )
    .catch((err) => {
      console.error("Database error:", err);
      res.status(500).json({ error: "Database error" });
    });
});

// Start server
app.listen(PORT, () => {
  console.log(`Todo backend running on port ${PORT}`);
});
