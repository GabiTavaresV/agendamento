import { IGetServiceRepository } from "../controllers/get-service/interface-get";
import { MongoClient } from "../database/mongo";
import { MongoService } from "../models/mongo-protocols";
import { Services } from "../models/services";

export class MongoGetServiceRepository implements IGetServiceRepository {
  async getUsers(): Promise<Services[]> {
    const users = await MongoClient.db
      .collection<MongoService>("profissional")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
