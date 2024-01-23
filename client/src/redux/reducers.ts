import { combineReducers } from "redux";
import serversReducer from "@/redux/modules/servers/slice";

import { ServersState } from "@/@types/states/servers";

export type StateType = {
  servers: ServersState;
};

export const rootReducer = {
  servers: serversReducer,
};
