import {
  ICreateProfessional,
  IgetProfissionalRepository,
} from "./protocolsCreate";

export class CreateProfessionalController implements ICreateProfessional {
  constructor(
    private readonly getProfissionalRepository: IgetProfissionalRepository
  ) {}

  async handle() {
    try {
      const profissional =
        await this.getProfissionalRepository.getProfissional();
      return {
        statusCode: 200,
        body: profissional,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Deu ruim",
      };
    }
  }
}
