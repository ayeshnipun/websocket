// const express = require("express");
// const messageRoutes = require("./routes/message-route");
// // const { initializeSocketIO } = require("./controllers/message-controller");
// const { initializeSocketIO } = require("./configs/socket-config");

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (_req, res) => {
//   res.send(`API is running successfully in : ${PORT}!`);
// });

// app.use("/api/message", messageRoutes);

// const server = app.listen(PORT, () => {
//   console.log(`Server started on port:${PORT}`);
// });

// initializeSocketIO(server);

const express = require("express");
const http = require("http");
// const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
// const io = socketIO(server);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
  },
});

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("WebSocket client connected");

  // Handle incoming messages
  socket.on("message", (message) => {
    console.log("received: ", message);
  });
});

// Express route for sending messages
app.post("/api/message/send", (req, res) => {
  // Emitting WebSocket event when /api/message/send is triggered
    io.emit("message", "Message sent successfully");
//   io.to(messageId).emit("message", {
//     id,
//     messageId,
//     sender,
//     reciever,
//     content,
//   });

  res.status(200).json({ success: true, message: "Message sent" });
});

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
