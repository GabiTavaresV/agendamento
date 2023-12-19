import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 3333;

app.listen(port, () => console.info(`Listening on port ${port}`));
