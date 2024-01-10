import { badRequest, created } from "../../helppers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IGetServiceRepository } from "../get-service/interface-get";
import { ServiceByProfissional } from "../../models/service-by-profissional";
import {
  CreateServiceByProfissionalParams,
  ICreateServiceByProfissionalRepository,
} from "./interface-create-service-by-profissional";

export class CreateServiceByProfessionalController implements IController {
  constructor(
    private readonly createServiceByProfissionalRepository: ICreateServiceByProfissionalRepository,
    private readonly getServiceRepository: IGetServiceRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<CreateServiceByProfissionalParams>
  ): Promise<HttpResponse<ServiceByProfissional | string>> {
    try {
      const param = ["name", "service"];

      for (const field of param) {
        if (
          !httpRequest?.body?.[field as keyof CreateServiceByProfissionalParams]
            ?.length
        ) {
          const findService = this.getServiceRepository.getUsers();
          if (!findService) throw new Error("Serviço não encontrado");
          return badRequest(`Field ${field} is required`);
        }
      }

      const serviceByProfissional =
        await this.createServiceByProfissionalRepository.createServiceProfissional(
          httpRequest.body!
        );
      return created<ServiceByProfissional>(serviceByProfissional);
    } catch (error) {
      return {
        statusCode: 500,
        body: "Deu ruim",
      };
    }
  }
}
