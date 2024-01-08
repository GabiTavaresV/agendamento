import { Services } from "../../models/services";

export interface IGetServiceRepository {
  getUsers(): Promise<Services[]>;
}
