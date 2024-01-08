import { Profissional } from "./profissional";
import { Services } from "./services";

export type MongoUser = Omit<Profissional, "id">;
export type MongoService = Omit<Services, "id">;
