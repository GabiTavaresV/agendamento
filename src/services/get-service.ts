import { IGetServiceRepository } from "../controllers/get-service/interface-get";

export class GetService {
  constructor(private readonly getServiceRepository: IGetServiceRepository) {}

  async list() {
    const a = await this.getServiceRepository.getUsers();
    return a;
  }
}
