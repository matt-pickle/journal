const User = require("../models/User");

//Gets a user's theme
function getTheme(req, res) {
  User.findOne(
    {username: req.query.user},
    (err, userObj) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(userObj.theme);
    }
  )
}

//Updates a user's theme
function updateTheme(req, res) {
  User.findOneAndUpdate({username: req.query.user}, //finds object by username
    {theme: req.query.theme}, //updates theme
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

module.exports = {getTheme, updateTheme};