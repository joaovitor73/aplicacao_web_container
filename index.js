const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let items = [];

app.post("/items", (req, res) => {
  const { name } = req.body;
  const id = items.length + 1;
  const newItem = { id, name };
  items.push(newItem);
  res.status(201).json(newItem);
});


app.get("/items", (req, res) => {
  res.json(items);
});


app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const item = items.find((i) => i.id === parseInt(id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});


app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const item = items.find((i) => i.id === parseInt(id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  item.name = name;
  res.json(item);
});


app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((i) => i.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }
  const deletedItem = items.splice(index, 1);
  res.json(deletedItem[0]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
