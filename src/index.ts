import express from "express";
import { config } from "dotenv";
import { router } from "./routes";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();
  app.use(express.json());
  app.use(router);

  await MongoClient.connect();

  const port = process.env.PORT || 3333;

  app.listen(port, () => console.info(`Listening on port ${port}`));
};

main();
