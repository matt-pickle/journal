const express = require("express");
const {registerUser, login, getUser, logout} = require("../controllers/userController");
const cookieParser = require("cookie-parser");

const router = express.Router();

router.use(cookieParser());

//Registers new user
router.post("/register", registerUser);

//Login
router.post("/login", login);

//Verifies login and gets current username
router.get("/getUser", getUser);

//Logout
router.get("/logout", logout);

module.exports = router;