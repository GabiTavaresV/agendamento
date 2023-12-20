import { IGetProfissionalRepository } from "../controllers/get-professional/interface-get";
import { MongoClient } from "../database/mongo";
import { MongoUser } from "../models/mongo-protocols";
import { Profissional } from "../models/profissional";

export class MongoGetUsersRepository implements IGetProfissionalRepository {
  async getUsers(): Promise<Profissional[]> {
    const users = await MongoClient.db
      .collection<MongoUser>("profissional")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
