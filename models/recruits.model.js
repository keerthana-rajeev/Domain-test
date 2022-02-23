var mongoose = require("mongoose");
var recruitSchema = new mongoose.Schema({
  Email: String,
  Name: String,
  Password: String,
});
module.exports = mongoose.model("Recruit", recruitSchema);
