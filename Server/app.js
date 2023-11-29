//Importation
const express = require("express");
const queueRouter = require("./route/QueueRoutes");
const LeaderBoardRouter = require("./route/LeaderBoardRoutes");
//Inisialisation
const app = express();

app.use(express.json());

app.use("/queue", queueRouter);
app.use("/board", LeaderBoardRouter);
//Exportation
module.exports = app;
