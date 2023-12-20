import { ok, serverError } from "../../helppers";
import { Profissional } from "../../models/profissional";
import { HttpResponse, IController } from "../protocols";
import { IGetProfissionalRepository } from "./interface-get";

export class GetProfessionalController implements IController {
  constructor(
    private readonly getProfissionalRepository: IGetProfissionalRepository
  ) {}
  async handle(): Promise<HttpResponse<Profissional[] | string>> {
    try {
      const profissionals = await this.getProfissionalRepository.getUsers();
      return ok<Profissional[]>(profissionals);
    } catch (error) {
      return serverError();
    }
  }
}
