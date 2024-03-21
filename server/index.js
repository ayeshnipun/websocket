const express = require("express");
const messageRoutes = require("./routes/message-route");
const { initializeSocketIO } = require("./controllers/message-controller");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send(`API is running successfully in : ${PORT}!`);
});

const server = app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});

initializeSocketIO(server);

app.use("/api/message", messageRoutes);
