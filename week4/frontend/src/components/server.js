const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
];

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add new user
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

// Delete user
app.delete("/users/:id", (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users.splice(index, 1);
  res.json({ message: "User deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));