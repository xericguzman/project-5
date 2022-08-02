//import middleware shit
import db from "./db/connection.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import chalk from "chalk";
import mongoose from "mongoose";

//make express work
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("connected to mongoDB"));
  app.listen(PORT, () => {
    console.log(`Express server running on ${PORT}`);
  });
});
