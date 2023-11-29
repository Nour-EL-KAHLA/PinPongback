//Importation
const mongoose = require("mongoose");
const server = require("./app");

//Connect to db
mongoose
  .connect(
    "mongodb+srv://benkahlanour:fKoJ5Qr1PtppvGDV@cluster0.cv0arlb.mongodb.net/pingpong"
  )
  .then(() => console.log("Connected to db"));
//listening to server
server.listen(5000, function () {
  console.log("server is running on port 5000");
});
