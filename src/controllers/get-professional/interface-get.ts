import { Profissional } from "../../models/profissional";

export interface IGetProfissionalRepository {
  getUsers(): Promise<Profissional[]>;
}
