const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4568;

app.use(cors());
app.use(express.json());

let todos = [];

// Get all todos
app.get("/todo-backend/todos", (req, res) => {
  res.json({ todos });
});

// Add a new todo
app.post("/todo-backend/todos", (req, res) => {
  const { todo } = req.body;

  if (!todo || todo.trim() === "") {
    return res.status(400).json({ error: "Invalid todo" });
  }

  todos.push(todo.trim());
  res.status(201).json({ message: "Todo added", todos });
});

// Start server
app.listen(PORT, () => {
  console.log(`Todo backend running on port ${PORT}`);
});
