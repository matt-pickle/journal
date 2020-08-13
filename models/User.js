const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  journal: [{date: String, entry: String}],
  theme: {type: String, default: "light"}
});

const User = mongoose.model("User", userSchema);

module.exports = User;