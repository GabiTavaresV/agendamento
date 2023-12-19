import { Profissional } from "../../models/profissional";
import { HttpResponse } from "../protocols";

export interface HttpRequest<B> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any;
  body?: B;
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
}

export interface ICreateProfessional {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handle(): Promise<HttpResponse<Profissional[]>>;
}

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

export interface IgetProfissionalRepository {
  getProfissional(): Promise<Profissional[]>;
}
