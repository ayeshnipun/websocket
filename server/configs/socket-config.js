const socketIO = require("socket.io");

let io;

const initializeSocketIO = (server) => {
  console.log("first");
  io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  io.on("error", (error) => {
    console.error("Socket.IO error:", error);
  });
};

module.exports = { io, initializeSocketIO };
