const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const { io } = require("../configs/socket-config");

// const socketIO = require("socket.io");

// let io;

// const initializeSocketIO = (server) => {
//   io = require("socket.io")(server, {
//     pingTimeout: 60000,
//     cors: {
//       origin: "*",
//     },
//   });

//   io.on("connection", (socket) => {
//     console.log("A user connected");

//     socket.on("disconnect", () => {
//       console.log("User disconnected");
//     });
//   });

//   io.on("error", (error) => {
//     console.error("Socket.IO error:", error);
//   });
// };

// module.exports = { io, initializeSocketIO };

const sendMessage = asyncHandler(async (req, res) => {
  const { messageId, sender, reciever, content } = req.body;

  const id = uuidv4();

  console.log(io)
  io.to(messageId).emit("message", {
    id,
    messageId,
    sender,
    reciever,
    content,
  });

  return res.json({
    id,
    messageId,
    sender,
    reciever,
    content,
  });
});

module.exports = {
  sendMessage,
};
