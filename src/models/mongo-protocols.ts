import { Profissional } from "./profissional";

export type MongoUser = Omit<Profissional, "id">;
