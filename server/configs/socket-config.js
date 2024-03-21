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

module.exports = { io, initializeSocketIO };
