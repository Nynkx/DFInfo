import { Servers } from "@/@types";

export interface IServersState {
  data: Servers | null;
  error: string;
}

export type ServersState = {
  servers: IServersState;
};
