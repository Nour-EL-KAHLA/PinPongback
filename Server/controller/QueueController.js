const Queue = require("../model/queue");

exports.getAllqueue = async (req, res) => {
  // req = request
  // res = response
  try {
    const queues = await Queue.find();
    console.log("hahah");
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
    const queue = await Queue.find({
      tableId: req.body.tableId,
    });
    const newlist = queue[0].users.filter(
      (user) => user.userId !== req.body.userId
    );
    const newQueue = await Queue.findByIdAndUpdate(
      queue[0]._id,
      {
        users: newlist,
      },
      //run validators bech nupdati taamlch tab jdid
      { new: true, runValidators: true }
    );

    res.status(200).json(newQueue);
  } catch (err) {
    res.status(400).json();
  }
};
