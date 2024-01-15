import { IGetProfissionalRepository } from "../controllers/get-professional/interface-get";

export class GetProfissionalService {
  constructor(
    private readonly getProfissionalRepository: IGetProfissionalRepository
  ) {}

  async list() {
    const a = await this.getProfissionalRepository.getUsers();
    return a;
  }
}
