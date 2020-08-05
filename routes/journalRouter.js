const express = require("express");
const {getJournal, updateJournal} = require("../controllers/journalController");

const router = express.Router();

//Gets a user's journal
router.get("/getJournal", getJournal);

//Updates a user's journal with added/edited/removed entries
router.put("/updateJournal", updateJournal);

module.exports = router;