const express = require("express");
const router = express.Router();
const controller = require("../controller/controller.js");

router.post("/", controller.postItem);

module.exports = router;
