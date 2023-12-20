import express from "express";
import { CreateProfessionalController } from "./controllers/professional/createProfessional";
import { MongoCreateProfissional } from "./repositories/mongo-post-profissional";

export const router = express.Router();

const mongoCreateProfissionalRepository = new MongoCreateProfissional();
const createProfissionalController = new CreateProfessionalController(
  mongoCreateProfissionalRepository
);

router.post("/v1/create-profissional", async (req, res) => {
  const { body, statusCode } = await createProfissionalController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

router.get(
  "/v1/find-profissional",
  createProfissionalController.getProfissional
);

router.get("/healthcheck", (req, res) => res.json("OK"));
