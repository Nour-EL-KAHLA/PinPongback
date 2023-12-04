const Queue = require("../model/queue");

exports.leaveuser = async (tableId, userId) => {
  const queue = await Queue.find({
    tableId: tableId,
  });
  const newlist = queue[0].users.filter((user) => user.userId !== userId);
  const newQueue = await Queue.findByIdAndUpdate(
    queue[0]._id,
    {
      users: newlist,
    },
    //run validators bech nupdati taamlch tab jdid
    { new: true, runValidators: true }
  );
  return newQueue;
};
