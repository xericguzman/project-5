import mongoose from "mongoose";
import chalk from "chalk";

const connectionString =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/project5";

const MONGODB_URI = mongoose.connect(connectionString);

mongoose.connect(MONGODB_URI).catch((error) => {
  console.log(`error connecting to mongodb: ${error.message} `);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("disconnected from mongodb"));
});

mongoose.connection.error("error", (error) => {
  console.log(chalk.red(`MongoDb connection error ${error}`));
});

export default mongoose.connection;
