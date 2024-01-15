import {
  CreateServiceByProfissionalParams,
  ICreateServiceByProfissionalRepository,
} from "../controllers/create-service-by-professional/interface-create-service-by-profissional";

export class CreateServiceByProfissionalService {
  constructor(
    private readonly createServiceByProfissionalRepository: ICreateServiceByProfissionalRepository
  ) {}

  async create(param: CreateServiceByProfissionalParams) {
    const a =
      await this.createServiceByProfissionalRepository.createServiceProfissional(
        param
      );
    return a;
  }
}
