import {
  CreateProfissionalParams,
  ICreateProfissionalRepository,
} from "../controllers/create-professional/interface-create";

export class CreateProfissionalService {
  constructor(
    private readonly createProfissionalRepository: ICreateProfissionalRepository
  ) {}

  async create(param: CreateProfissionalParams) {
    const a = await this.createProfissionalRepository.createUser(param);
    return a;
  }
}
