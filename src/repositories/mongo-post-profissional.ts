import {
  CreateProfissionalParams,
  ICreateProfissionalRepository,
} from "../controllers/professional/protocolsCreate";
import { MongoClient } from "../database/mongo";
import { MongoUser } from "../models/mongo-protocols";
import { Profissional } from "../models/profissional";

export class MongoCreateProfissional implements ICreateProfissionalRepository {
  async createUser(params: CreateProfissionalParams): Promise<Profissional> {
    const { insertedId } = await MongoClient.db
      .collection("profissional")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<MongoUser>("profissional")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("User not created");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
