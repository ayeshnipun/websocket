const express = require("express");
// const { protect } = require('../middleware/authMiddleware');
const { sendMessage } = require("../controllers/message-controller");

const router = express.Router();

router.route("/send").post(sendMessage);

module.exports = router;
