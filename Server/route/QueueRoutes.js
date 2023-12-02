const express = require("express");
const {
  getAllqueue,
  addUserToQueue,
  leaveUserFromQueue,
} = require("../controller/QueueController");
const router = express.Router();

router.route("/getAllqueue").get(getAllqueue);
router.route("/addUserToQueue").post(addUserToQueue);
router.route("/leaveUserFromQueue").delete(leaveUserFromQueue);
module.exports = router;
