import { badRequest, created } from "../../helppers";
import { Services } from "../../models/services";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import {
  CreateServicesParams,
  ICreateServicesRepository,
} from "./interface-create-services";

export class CreateServicesController implements IController {
  constructor(
    private readonly createServicesRepository: ICreateServicesRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<CreateServicesParams>
  ): Promise<HttpResponse<Services | string>> {
    try {
      const param = ["name", "description", "price"];

      for (const field of param) {
        if (!httpRequest?.body?.[field as keyof CreateServicesParams]?.length) {
          return badRequest(`Field ${field} is required`);
        }
      }

      const services = await this.createServicesRepository.createServices(
        httpRequest.body!
      );
      return created<Services>(services);
    } catch (error) {
      return {
        statusCode: 500,
        body: "Deu ruim",
      };
    }
  }
}
