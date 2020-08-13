const express = require("express");
const {getTheme, updateTheme} = require("../controllers/themeController");

const router = express.Router();

//Gets a user's theme
router.get("/getTheme", getTheme);

//Updates a user's theme
router.put("/updateTheme", updateTheme);

module.exports = router;