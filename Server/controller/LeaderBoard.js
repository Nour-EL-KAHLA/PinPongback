const LeaderBoard = require("../model/leaderboard");

exports.getAllLeaderBoard = async (req, res) => {
  try {
    const Leaderboard = await LeaderBoard.find();
    res.status(200).json(Leaderboard);
  } catch (err) {
    res.status(400).json();
  }
};

exports.addWinForUser = async (req, res) => {
  try {
    const { userId } = req.body;

    const board = await LeaderBoard.findOne({
      userId: userId,
    });

    if (board) {
      const newboard = await LeaderBoard.findByIdAndUpdate(
        board._id,
        { winrate: board.winrate + 1 },
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json(newboard);
    } else {
      const newboard = new LeaderBoard({
        userId: req.body.userId,
        fullName: req.body.fullName,
        imageUrl: req.body.imageUrl,
        loserate: 0,
        winrate: 1,
      });
      const addedboard = await newboard.save();
      res.status(200).json(addedboard);
    }
  } catch (err) {
    res.status(400).json();
  }
};
exports.addloseForUser = async (req, res) => {
  try {
    const { userId } = req.body;

    const board = await LeaderBoard.findOne({
      userId: userId,
    });

    if (board) {
      const newboard = await LeaderBoard.findByIdAndUpdate(
        board._id,
        { loserate: board.loserate + 1 },
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json(newboard);
    } else {
      const newboard = new LeaderBoard({
        userId: req.body.userId,
        fullName: req.body.fullName,
        imageUrl: req.body.imageUrl,
        winrate: 0,
        loserate: 1,
      });
      const addedboard = await newboard.save();
      res.status(200).json(addedboard);
    }
  } catch (err) {
    res.status(400).json();
  }
};
