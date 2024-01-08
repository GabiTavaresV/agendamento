import { ok, serverError } from "../../helppers";
import { Services } from "../../models/services";
import { HttpResponse, IController } from "../protocols";
import { IGetServiceRepository } from "./interface-get";

export class GetServiceController implements IController {
  constructor(private readonly getServiceRepository: IGetServiceRepository) {}
  async handle(): Promise<HttpResponse<Services[] | string>> {
    try {
      const profissionals = await this.getServiceRepository.getUsers();
      return ok<Services[]>(profissionals);
    } catch (error) {
      return serverError();
    }
  }
}
