const Queue = require("../model/queue");
const { leaveuser } = require("../utils/methods");

exports.getAllqueue = async (req, res) => {
  // req = request
  // res = response
  try {
    const queues = await Queue.find();

    res.status(200).json(queues);
  } catch (err) {
    res.status(400).json();
  }
};

exports.addUserToQueue = async (req, res) => {
  try {
    const queue = await Queue.find({
      tableId: req.body.tableId,
    });

    if (queue.length === 0) {
      const newQueue = new Queue({
        tableId: req.body.tableId,
        users: [
          {
            userId: req.body.userId,
            fullName: req.body.fullName,
            imageUrl: req.body.imageUrl,
          },
        ],
      });

      const newqueue = await newQueue.save();

      res.status(201).json(newqueue);
    } else {
      const found = queue[0].users.find(
        (user) => user.userId === req.body.userId
      );

      if (found && Object.entries(found).length != 0) {
        res.status(401).json(null);
      } else {
        const newusers = [
          ...queue[0].users,
          {
            userId: req.body.userId,
            fullName: req.body.fullName,
            imageUrl: req.body.imageUrl,
          },
        ];

        const newQueue = await Queue.findByIdAndUpdate(
          queue[0]._id,
          {
            users: newusers,
          },
          { new: true, runValidators: true }
        );
        console.log(newQueue);
        res.status(200).json(newQueue);
      }
    }
  } catch (err) {
    res.status(400).json();
  }
};
exports.leaveUserFromQueue = async (req, res) => {
  try {
    const newQueue = await leaveuser(req.body.tableId, req.body.userId);

    res.status(200).json(newQueue);
  } catch (err) {
    res.status(400).json();
  }
};
