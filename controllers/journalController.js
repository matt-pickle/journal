const User = require("../models/User");

//Gets a user's journal
function getJournal(req, res) {
  User.findOne(
    {username: req.query.user},
    (err, userObj) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(userObj.journal);
    }
  )
}

//Updates a user's journal with added/edited/removed entries
function updateJournal(req, res) {
  User.findOneAndUpdate({username: req.query.user}, //finds object by username
    {journal: JSON.parse(req.query.journal)}, //updates journal with changes
    {useFindAndModify: false}, //option to turn off deprecated function
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      return res.sendStatus(200);
    }
  );
}

module.exports = {getJournal, updateJournal};