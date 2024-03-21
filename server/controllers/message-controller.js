const asyncHandler = require("express-async-handler");

let io;

const initializeSocketIO = (server) => {
  io = require("socket.io")(server, {
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
};

const sendMessage = asyncHandler(async (req, res) => {
  const { messageId, sender, reciever, content } = req.body;

  io.emit("message", {
    messageId,
    sender,
    reciever,
    content,
  });

  res.status(200).json({ success: true, message: "Message sent" });
});

module.exports = {
  io,
  initializeSocketIO,
  sendMessage,
};
