import { badRequest, created } from "../../helppers";
import { Profissional } from "../../models/profissional";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import {
  CreateProfissionalParams,
  ICreateProfissionalRepository,
} from "./protocolsCreate";

export class CreateProfessionalController implements IController {
  constructor(
    private readonly createProfissionalRepository: ICreateProfissionalRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<CreateProfissionalParams>
  ): Promise<HttpResponse<Profissional | string>> {
    try {
      const param = ["name", "age", "email", "phone", "password"];

      for (const field of param) {
        if (
          !httpRequest?.body?.[field as keyof CreateProfissionalParams]?.length
        ) {
          return badRequest(`Field ${field} is required`);
        }
      }

      const profissional = await this.createProfissionalRepository.createUser(
        httpRequest.body!
      );
      return created<Profissional>(profissional);
    } catch (error) {
      return {
        statusCode: 500,
        body: "Deu ruim",
      };
    }
  }
}
