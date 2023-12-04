const mongoose = require("mongoose");

const QueueSchema = new mongoose.Schema({
  tableId: {
    type: String,
  },
  users: [
    {
      userId: String,
      fullName: {
        type: String,
      },
      imageUrl: String,
      joindate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Queue = mongoose.model("Queue", QueueSchema);

module.exports = Queue;
