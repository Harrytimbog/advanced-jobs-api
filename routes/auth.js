// Imports

const express = require("express");

const router = express.Router();
const authenticateUser = require("../middleware/authentication");
const testUser = require("../middleware/testUser");
const { register, login, updateUser } = require("../controllers/auth");

// routes

router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", authenticateUser, testUser, updateUser);

module.exports = router;
