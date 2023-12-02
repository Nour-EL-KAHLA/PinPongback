const express = require("express");
const {
  getAllLeaderBoard,
  addWinForUser,
} = require("../controller/LeaderBoard");
const router = express.Router();

router.route("/getAllLeaderBoard").get(getAllLeaderBoard);
router.route("/addWinForUser").post(addWinForUser);

module.exports = router;
