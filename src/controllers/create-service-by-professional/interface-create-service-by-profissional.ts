import { ServiceByProfissional } from "../../models/service-by-profissional";

export interface CreateServiceByProfissionalParams {
  name: string;
  service: string;
}

export interface ICreateServiceByProfissionalRepository {
  createServiceProfissional(
    params: CreateServiceByProfissionalParams
  ): Promise<ServiceByProfissional>;
}
