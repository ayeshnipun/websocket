const express = require("express");
const messageRoutes = require("./routes/message-route");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});

app.use("/api/message", messageRoutes);
