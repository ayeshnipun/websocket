const asyncHandler = require("express-async-handler");

const sendMessage = asyncHandler(async (req, res) => {
  const { messageId, sender, reciever, content } = req.body;

  res
    .status(200)
    .json({ success: true, message: { messageId, sender, reciever, content } });
});

module.exports = {
  sendMessage,
};
