const mongoose = require("mongoose");

const LeaderBoardSchema = new mongoose.Schema({
  userId: String,
  fullName: String,
  imageUrl: String,
  winrate: Number,
  loserate: Number,
});

const LeaderBoard = mongoose.model("LeaderBoard", LeaderBoardSchema);

module.exports = LeaderBoard;
