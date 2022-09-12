const express = require("express");
const { getUser, saveUser } = require("../controller/UserController");
const router = express.Router;

router.get("/user", getUser);
router.post("/user", saveUser);

module.exports = router;
