const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

//Registers new user
function registerUser(req, res) {
  //Checks if username is already taken
  User.findOne({username: req.query.username}, (err, user) => {
    if (user) {
      res.status(400).send("Username is already taken");
    } else if (err) {
      console.error(err);
      res.status(500).send("Error registering new user");
    } else {
      //Hashes password
      bcrypt.hash(req.query.password, 10, (err, hashedPassword) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error registering new user");
        } else {
          //Creates new user in database
          User.create({
            username: req.query.username,
            password: hashedPassword
          },
            err => {
              if (err) {
                console.error(err);
                res.status(500).send("Error registering new user");
              } else {
                //Issue token
                const token = jwt.sign({username: req.query.username}, SECRET, {expiresIn: "5 hours"});
                res.cookie("token", token, {httpOnly: true})
                .sendStatus(200);
              }
            }
          );
        }
      });
    }
  });
}

//Login
function login(req, res) {
  User.findOne({username: req.query.username}, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal error. Please try again.");
    } else if (!user) { //Check username
      res.status(401).send("Incorrect username.");
    } else {
      //Check password
      bcrypt.compare(req.query.password, user.password, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal error. Please try again.");
        } else if (!result) {
          res.status(401).send("Incorrect password.");
        } else {
          //Issue token
          const token = jwt.sign({username: req.query.username}, SECRET, {expiresIn: "5 hours"});
          res.cookie("token", token, {httpOnly: true})
            .sendStatus(200);
        }
      });
    }
  });
}

//Verifies login and gets current username
function getUser(req, res) {
  if (!req.cookies.token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(req.cookies.token, SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        res.status(200).send(decoded.username);
      }
    });
  }
}

//Logout
function logout(req, res) {
  res.cookie("token").sendStatus(200);
}

module.exports = {
  registerUser,
  login,
  getUser,
  logout
}