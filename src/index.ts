import express from "express";
import { config } from "dotenv";
import { router } from "./routes";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  await MongoClient.connect();
  const app = express();
  app.use(router);

  const port = process.env.PORT || 3333;

  app.listen(port, () => console.info(`Listening on port ${port}`));
};

main();
