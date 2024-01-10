import {
  CreateServiceByProfissionalParams,
  ICreateServiceByProfissionalRepository,
} from "../controllers/create-service-by-professional/interface-create-service-by-profissional";
import { IGetServiceRepository } from "../controllers/get-service/interface-get";
import { MongoClient } from "../database/mongo";
import { ServiceByProfissional } from "../models/service-by-profissional";
import { Services } from "../models/services";

export class MongoCreateServicesByProfissional
  implements ICreateServiceByProfissionalRepository, IGetServiceRepository
{
  getUsers(): Promise<Services[]> {
    throw new Error("Method not implemented.");
  }
  async createServiceProfissional(
    params: CreateServiceByProfissionalParams
  ): Promise<ServiceByProfissional> {
    const { insertedId } = await MongoClient.db
      .collection("profissional")
      .insertOne(params);

    const service = await MongoClient.db
      .collection<ServiceByProfissional>("profissional")
      .findOne({ _id: insertedId });

    if (!service) {
      throw new Error("Service not created");
    }
    const { ...rest } = service;

    return { ...rest };
  }
}
