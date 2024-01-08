import {
  CreateServicesParams,
  ICreateServicesRepository,
} from "../controllers/create-services/interface-create-services";
import { MongoClient } from "../database/mongo";
import { MongoService } from "../models/mongo-protocols";
import { Services } from "../models/services";

export class MongoCreateServices implements ICreateServicesRepository {
  async createServices(params: CreateServicesParams): Promise<Services> {
    const { insertedId } = await MongoClient.db
      .collection("profissional")
      .insertOne(params);

    const service = await MongoClient.db
      .collection<MongoService>("profissional")
      .findOne({ _id: insertedId });

    if (!service) {
      throw new Error("Service not created");
    }
    const { _id, ...rest } = service;

    return { id: _id.toHexString(), ...rest };
  }
}
