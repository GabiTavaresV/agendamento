import express from "express";
import { CreateProfessionalController } from "./controllers/create-professional/create-professional";
import { MongoCreateProfissional } from "./repositories/mongo-post-profissional";
import { GetProfessionalController } from "./controllers/get-professional/get-professional";
import { MongoGetUsersRepository } from "./repositories/mongo-get-profissional";
import { CreateServicesController } from "./controllers/create-services/create-services";
import { MongoCreateServices } from "./repositories/mongo-post-services";
import { GetServiceController } from "./controllers/get-service/get-service";
import { MongoGetServiceRepository } from "./repositories/mongo-get-service";
import { CreateServiceByProfessionalController } from "./controllers/create-service-by-professional/create-service-by-professional";
import { MongoCreateServicesByProfissional } from "./repositories/mongo-post-services-profissional";

export const router = express.Router();

const mongoCreateProfissionalRepository = new MongoCreateProfissional();
const mongoCreateServices = new MongoCreateServices();
const mongoCreateServicesByProfissional =
  new MongoCreateServicesByProfissional();
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

const createServiceByProfessionalController =
  new CreateServiceByProfessionalController(
    mongoCreateServicesByProfissional,
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

router.post("/v1/create-service-by-profissional", async (req, res) => {
  const { body, statusCode } =
    await createServiceByProfessionalController.handle({
      body: req.body,
    });

  res.status(statusCode).send(body);
});

router.get("/v1/find-profissional", async (req, res) => {
  const { body, statusCode } = await getProfissionalController.handle();
  res.status(statusCode).send(body);
});

router.get("/v1/find-service/:id?", async (req, res) => {
  const { body, statusCode } = await getServiceController.handle();
  res.status(statusCode).send(body);
});

router.get("/healthcheck", (req, res) => res.json("OK"));
