import { Services } from "../../models/services";

export interface CreateServicesParams {
  name: string;
  description: string;
  price: string;
}

export interface ICreateServicesRepository {
  createServices(params: CreateServicesParams): Promise<Services>;
}
