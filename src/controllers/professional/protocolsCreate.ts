import { Profissional } from "../../models/profissional";

export interface CreateProfissionalParams {
  name: string;
  age: string;
  email: string;
  phone: string;
  password: string;
}

export interface ICreateProfissionalRepository {
  createUser(params: CreateProfissionalParams): Promise<Profissional>;
}
