import express from "express";
import { CreateProfessionalController } from "./controllers/create-professional/create-professional";
import { MongoCreateProfissional } from "./repositories/mongo-post-profissional";
import { GetProfessionalController } from "./controllers/get-professional/get-professional";
import { MongoGetUsersRepository } from "./repositories/mongo-get-profissional";
import { CreateServicesController } from "./controllers/create-services/create-services";
import { MongoCreateServices } from "./repositories/mongo-post-services";
import { GetServiceController } from "./controllers/get-service/get-service";
import { MongoGetServiceRepository } from "./repositories/mongo-get-service";

export const router = express.Router();

const mongoCreateProfissionalRepository = new MongoCreateProfissional();
const mongoCreateServices = new MongoCreateServices();
const createProfissionalController = new CreateProfessionalController(
  mongoCreateProfissionalRepository
);
const createServicesController = new CreateServicesController(
  mongoCreateServices
);

const mongoGetProfissional = new MongoGetUsersRepository();
const mongoGetServiceRepository = new MongoGetServiceRepository();

const getProfissionalController = new GetProfessionalController(
  mongoGetProfissional
);

const getServiceController = new GetServiceController(
  mongoGetServiceRepository
);

router.post("/v1/create-profissional", async (req, res) => {
  const { body, statusCode } = await createProfissionalController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

router.post("/v1/create-service", async (req, res) => {
  const { body, statusCode } = await createServicesController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

router.get("/v1/find-profissional", async (req, res) => {
  const { body, statusCode } = await getProfissionalController.handle();
  res.status(statusCode).send(body);
});

router.get("/v1/find-service", async (req, res) => {
  const { body, statusCode } = await getServiceController.handle();
  res.status(statusCode).send(body);
});

router.get("/healthcheck", (req, res) => res.json("OK"));
