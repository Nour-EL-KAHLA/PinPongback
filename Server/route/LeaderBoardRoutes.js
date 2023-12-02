const express = require("express");
const {
  getAllLeaderBoard,
  addWinForUser,
  addloseForUser,
} = require("../controller/LeaderBoard");
const router = express.Router();

router.route("/getAllLeaderBoard").get(getAllLeaderBoard);
router.route("/addWinForUser").post(addWinForUser);
router.route("/addloseForUser").post(addloseForUser);
module.exports = router;
